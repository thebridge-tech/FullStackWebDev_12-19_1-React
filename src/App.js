import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header.js";
import VideoContainer from "./components/VideoContainer/VideoContainer.js";
import FeaturesMaster from "./components/FeaturesMaster/FeaturesMaster.js";
import Footer from "./components/Footer/Footer.js";

class App extends Component {
  constructor() {
    super();

    this.state = { brand: "ACME" };
  }

  render() {
    return (
      <div>
        <Header brand={this.state.brand} />
        <VideoContainer />
        <FeaturesMaster />
        <Footer />
      </div>
    );
  }
}

export default App;
