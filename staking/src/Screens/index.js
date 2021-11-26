import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import NotFound from "./NotFound";
import routes from "./routes";

const HomeScreen = React.lazy(() => import("./HomeScreen"));

const EntryScreen = () => {
  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            exact={route.exact}
            key={route.key}
            path={route.path}
            render={(props) => (
              <Layout isLoading={false} path={route.path}>
                <route.component props={props} route={route} />
              </Layout>
            )}
          />
        )
      })}
      <Route
        path={["/home", "/"]}
        render={() => (
          <Layout isLoading={false} path="/">
            <div id={"Home"}>
              <HomeScreen />
            </div>
          </Layout>
        )}
      />
      <Route
        path="*"
        render={(props) => (
          <div className="col py-3">
            <NotFound />
          </div>
        )}
      />
    </Switch>
  );
};

export default React.memo(EntryScreen);
