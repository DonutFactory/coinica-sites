import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./screens/Home";
import Whitepaper from "./screens/Whitepaper";

const Coinica = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/whitepaper">
            <Whitepaper />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
};

export default Coinica;