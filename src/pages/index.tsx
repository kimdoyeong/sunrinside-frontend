import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./SignUp";
import IndexPage from "./IndexPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/signup" exact component={SignUpPage} />
    </Switch>
  );
}

export default Routes;
