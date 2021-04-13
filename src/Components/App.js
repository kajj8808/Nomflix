import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyle from "Components/GloabalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyle />
      </>
    );
  }
}

export default App;