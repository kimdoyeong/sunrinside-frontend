import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./SignUp";
import IndexPage from "./IndexPage";
import VerifyPage from "./Verify";
import ThreadViewPage from "./ThreadViewPage";
import WritePage from "./WritePage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/verify/:id/:code" exact component={VerifyPage} />
      <Route path="/thread/:id" exact component={ThreadViewPage} />
      <Route path="/write" exact component={WritePage} />
    </Switch>
  );
}

export default Routes;
