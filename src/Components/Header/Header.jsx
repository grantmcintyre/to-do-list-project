
import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <>
        <h1>TO DO LIST</h1>
        <h2>We have {this.props.tasks} Tasks left to do</h2>
      </>
    );
  }
}

export default Header;
