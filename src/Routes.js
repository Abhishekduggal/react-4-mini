import React from "react";
import { Switch, Route } from "react-router-dom";
import Route1 from "./Route1";
import Route2 from "./Route2";
import Route3 from "./Route3";

// (React.Component is the same as {Component} in the header)

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Route1} />
        <Route render={props => <Route2 products={this.props.products} />} />
        <Route exact path="/Route3" component={Route3} />
        {/* Route doesnt care about upper or lower cases */}
      </Switch>
    );
  }
}
