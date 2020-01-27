import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return <header>{this.props.brand}</header>;
  }
}

export default Header;
