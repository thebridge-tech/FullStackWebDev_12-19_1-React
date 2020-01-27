import React, { Component } from "react";
import "./FeatureDetail.css";

export default class FeatureDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      class: "inactive",
      order: this.props.id
    };
  }

  changeColor() {
    this.setState(prevState => ({
      active: !prevState.active,
      class: prevState.class === "inactive" ? "active" : "inactive",
      order: this.props.id
    }));
  }

  render() {
    return (
      <div className={"feature-detail " + this.state.class}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <button onClick={this.changeColor.bind(this)}>Suicidio</button>
      </div>
    );
  }
}
