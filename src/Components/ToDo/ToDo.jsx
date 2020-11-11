import React, { Component } from "react";
import styles from "./ToDo.module.scss";

class ToDo extends Component {
  render() {
    return (
      <>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
      </>
    );
  }
}

export default ToDo;
