import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Map from "./pages/Map";
import CreatPoint from "./pages/CreatePoint";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/map" component={Map} />
    <Route path="/create-point" component={CreatPoint} />
  </BrowserRouter>
);

export default Routes;
