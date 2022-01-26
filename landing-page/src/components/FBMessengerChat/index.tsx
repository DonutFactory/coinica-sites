import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbAsyncInit: any;
    FB: any;
    config: any;
  }
}

const removeElementByIds = (ids: any[]) => {
  ids.forEach((id) => {
    const element = document.getElementById(id);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

type Props = {
  pageId: string;
  version?: string;
  language?: string;
  debug?: boolean;
  shouldShowDialog?: boolean;
  htmlRef?: string;
  minimized?: boolean;
  themeColor?: string;
  loggedInGreeting?: string;
  loggedOutGreeting?: string;
  greetingDialogDisplay?: "show" | "hide" | "fade";
  greetingDialogDelay?: number;
  autoLogAppEvents?: boolean;
  onCustomerChatDialogShow?: () => void;
  onCustomerChatDialogHide?: () => void;
};

const FBMessengerChat = ({
  pageId,
  shouldShowDialog = false,
  version = "12.0",
  language = "en_US",
  debug = false,
  autoLogAppEvents = false,
  htmlRef,
  minimized,
  themeColor,
  loggedInGreeting,
  loggedOutGreeting,
  greetingDialogDisplay,
  greetingDialogDelay,
  onCustomerChatDialogShow,
  onCustomerChatDialogHide,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFbAsyncInit();
      reloadSDKAsynchronously();
    }, 2000);

    return () => {
      if (window.FB !== undefined) {
        window.FB.CustomerChat.hide();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pageId,
    shouldShowDialog,
    version,
    language,
    debug,
    autoLogAppEvents,
    htmlRef,
    minimized,
    themeColor,
    loggedInGreeting,
    loggedOutGreeting,
    greetingDialogDisplay,
    greetingDialogDelay,
    onCustomerChatDialogShow,
    onCustomerChatDialogHide,
  ]);

  useEffect(() => {
    if (window.FB !== undefined && init) {
      window.FB.XFBML.parse();
    }
  }, [init]);

  const setFbAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        autoLogAppEvents,
        xfbml: false,
        version: `v${version}`,
      });
      setInit(true);
      setIsLoading(true);
    };
  };

  const loadSDKAsynchronously = () => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      //@ts-ignore
      js.src = `https://connect.facebook.net/${language}/sdk/xfbml.customerchat.js`;
      //@ts-ignore
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  const removeFacebookSDK = () => {
    removeElementByIds(["facebook-jssdk", "fb-root"]);

    delete window.FB;
  };

  const reloadSDKAsynchronously = () => {
    removeFacebookSDK();
    loadSDKAsynchronously();
  };

  const controlPlugin = () => {
    if (shouldShowDialog) {
      window.FB.CustomerChat.showDialog();
    } else {
      window.FB.CustomerChat.hideDialog();
    }
  };

  const subscribeEvents = () => {
    if (onCustomerChatDialogShow) {
      window.FB.Event.subscribe(
        "customerchat.dialogShow",
        onCustomerChatDialogShow
      );
    }

    if (onCustomerChatDialogHide) {
      window.FB.Event.subscribe(
        "customerchat.dialogHide",
        onCustomerChatDialogHide
      );
    }
  };

  const createMarkup = () => {
    const refAttribute = htmlRef !== undefined ? `ref="${htmlRef}"` : "";
    const minimizedAttribute =
      minimized !== undefined ? `minimized="${minimized}"` : "";
    const themeColorAttribute =
      themeColor !== undefined ? `theme_color="${themeColor}"` : "";
    const loggedInGreetingAttribute =
      loggedInGreeting !== undefined
        ? `logged_in_greeting="${loggedInGreeting}"`
        : "";
    const loggedOutGreetingAttribute =
      loggedOutGreeting !== undefined
        ? `logged_out_greeting="${loggedOutGreeting}"`
        : "";
    const greetingDialogDisplayAttribute =
      greetingDialogDisplay !== undefined
        ? `greeting_dialog_display="${greetingDialogDisplay}"`
        : "";
    const greetingDialogDelayAttribute =
      greetingDialogDelay !== undefined
        ? `greeting_dialog_delay="${greetingDialogDelay}"`
        : "";

    return {
      __html: `<div
          class="fb-customerchat"
          page_id="${pageId}"
          ${refAttribute}
          ${minimizedAttribute}
          ${themeColorAttribute}
          ${loggedInGreetingAttribute}
          ${loggedOutGreetingAttribute}
          ${greetingDialogDisplayAttribute}
          ${greetingDialogDelayAttribute}
        ></div>`,
    };
  };

  const renderMessengerChat = () => {
    if (isLoading && shouldShowDialog) {
      document.addEventListener(
        "DOMNodeInserted",
        (event) => {
          const element = event.target;
          if (
            //@ts-ignore
            element.className &&
            //@ts-ignore
            typeof element.className === "string" &&
            //@ts-ignore
            element.className.includes("fb_dialog")
          ) {
            controlPlugin();
          }
        },
        false
      );
      subscribeEvents();
    }
    // Add a random key to rerender. Reference:
    // https://stackoverflow.com/questions/30242530/dangerouslysetinnerhtml-doesnt-update-during-render
    return <div key={Date()} dangerouslySetInnerHTML={createMarkup()} />;
  };

  return renderMessengerChat();
};

export default FBMessengerChat;
