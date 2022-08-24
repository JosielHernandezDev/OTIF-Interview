import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";

import LoginPage from "../page/loginPage";
import SearchPage from "../page/searchPage";

import { LayoutContainer } from "../shared/LayoutContainer/LayoutContainer";

export default function AppRouter() {
  return (
    <Router>
      <LayoutContainer>
        <Switch>
          <PublicRoute exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/search" component={SearchPage} />
          <Route path="*">
            <Redirect to="/search" />
          </Route>
        </Switch>
      </LayoutContainer>
    </Router>
  );
}
