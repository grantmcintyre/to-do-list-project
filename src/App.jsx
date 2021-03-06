import React, { Component } from 'react';
import "./App.css";
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import SubmitForm from "./Components/SubmitForm";

class App extends Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  }

  handleDelete = (index) => {
    const newArray = [...this.state.tasks];
    newArray.splice(index, 1);
    this.setState({tasks: newArray});
  }

  handleSubmit = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  }


  render() { 
    return (
      <div class="container">
        <Header tasks={this.state.tasks.length} />
        <ToDoList 
          tasks={this.state.tasks}
          onDelete={this.handleDelete} 
        />
        <SubmitForm onFormSubmit={this.handleSubmit} />
      </div>
    );
  }
}
 
export default App;