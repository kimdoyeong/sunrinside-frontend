import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./SignUp";

function Routes() {
  return (
    <Switch>
      <Route path="/signup" exact component={SignUpPage} />
    </Switch>
  );
}

export default Routes;
