import React, { Component } from "react";
import styles from "./ToDoList.module.scss";
import ToDo from "../ToDo";

class ToDoList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((todo, index) => {
          return <ToDo content={todo} key={index} id={index} onDelete={this.props.onDelete}/>
        })}
      </div>
    );
  }
}

export default ToDoList;
