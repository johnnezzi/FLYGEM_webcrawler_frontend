import React, { Component } from "react";
import "./App.css";
import Search from "./Component/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Webcrawler</header>
        <br />
        <Search />
      </div>
    );
  }
}

export default App;
