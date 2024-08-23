import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "views/Home.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/Home' component={Home} />
      <Redirect from='/' to='/Home' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
