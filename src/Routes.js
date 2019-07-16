import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import NewNote from "./containers/NewNote";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />

    <UnauthenticatedRoute
    path="/login/reset"
    exact
    component={ResetPassword}
    props={childProps}
    />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
 