import React, { Component } from "react";
import FeatureDetail from "../FeatureDetail/FeatureDetail.js";
import "./FeaturesMaster.css";

class FeaturesMaster extends Component {
  constructor() {
    super();

    // Mock data
    this.state = {
      title: "My features list",
      nameSection: "Stuff",
      features: [
        {
          title: "Feature 1",
          body: "lorem ipsum dolor"
        },
        {
          title: "Feature 2",
          body: "ipsum dolor lorem"
        },
        {
          title: "Feature 3",
          body: "dolor lorem ipsum"
        }
      ]
    };

    // Explicit binding
    this.addNewFeature = this.addNewFeature.bind(this);
  }

  getItems() {
    // Compose item container
    const resultMap = this.state.features.map((item, index) => (
      <div className="col-lg-4" key={index}>
        <FeatureDetail
          id={"feature" + index}
          title={item.title}
          body={item.body}
        />
      </div>
    ));

    return resultMap;
  }

  addNewFeature(event) {
    event.preventDefault();

    let inputTitle = event.target.children[1];
    let inputBody = event.target.children[3];

    this.setState(prevState => ({
      title: prevState.title,
      nameSection: prevState.nameSection,
      features: [
        ...prevState.features,
        {
          title: inputTitle.value,
          body: inputBody.value
        }
      ]
    }));
  }

  render() {
    return (
      <div className="features-master">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.addNewFeature}>
              <label htmlFor="title">Título</label>
              <input type="text" id="title" name="title" />

              <label htmlFor="body">Cuerpo</label>
              <textarea id="body" name="body"></textarea>

              <button type="submit">Nuevo</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>{this.state.title}</h1>
          </div>
        </div>
        <div className="row">{this.getItems()}</div>
        <div className="row">
          <div className="col-12">
            <button>Saber más</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesMaster;
