import React, { Component } from "react";
import "./App.css";
import Search from "./Component/Search";
import * as api from "./Component/utils";

class App extends Component {
  state = {
    URL: ""
  };
  render() {
    return (
      <div className="App">
        <header>Webcrawler</header>
        <br />
        <Search updateURL={this.updateURL} />
      </div>
    );
  }
  updateURL = newURL => {
    console.log();
    this.setState({ URL: newURL });
  };

  postUrl = url => {
    const { URL } = this.state;

    api
      .postArticle(URL)
      .then(data => console.log(data))
      .catch(console.log);
  };
}

export default App;
