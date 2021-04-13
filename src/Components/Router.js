import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

//Switch one Router render
//redirect other url go to home => /
export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Movie} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
