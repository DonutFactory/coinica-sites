import { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";

type ScrollRevealProps = {
  style?: CSSProperties;
  resetAnimation?: boolean;
};

const ScrollReveal: FC<ScrollRevealProps> = ({
  children,
  style,
  resetAnimation = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: resetAnimation,
        delay: 300,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={sectionRef} style={style} className="scroll-section">
      {children}
    </div>
  );
};

export default ScrollReveal;
