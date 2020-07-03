import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import ReduxExample from "./pages/ReduxExample";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/redux" component={ReduxExample} />
        {/* <Route gebrishpath="*" component={NotFound} /> */}
      </Switch>
    </>
  );
};

export default Routes;
