import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default function routes(props) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Dashboard} />
      <Route path="/billingCycles" component={BillingCycle} />
      <Redirect path="*" to="/" />
    </Router>
  );
}
