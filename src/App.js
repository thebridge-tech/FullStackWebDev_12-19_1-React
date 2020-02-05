import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header.js";
import VideoContainer from "./components/VideoContainer/VideoContainer.js";
import FeaturesMaster from "./components/FeaturesMaster/FeaturesMaster.js";
import ToDoList from "./components/ToDoList/ToDoList.js";
import Footer from "./components/Footer/Footer.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = { brand: "ACME" };
  }

  render() {
    return (
      <div>
        <Header brand={this.state.brand} />

        <Router>
          <Link to="/">Ver Vídeo</Link>
          <Link to="/features">Características</Link>
          <Link to="/todolist">Lista de Tareas</Link>

          <Switch>
            <Route exact path="/">
              <VideoContainer />
            </Route>
            <Route path="/features">
              <FeaturesMaster />
            </Route>
            <Route path="/todolist">
              <ToDoList />
            </Route>
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
