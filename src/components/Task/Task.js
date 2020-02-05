import React, { Component } from 'react';
import "./Task.css";

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idTask: this.props.idTask,
      time: this.props.time,
      text: this.props.text
    };
  }

  handleClick() {
    this.props.onDeleteTask(this.state.idTask);
  }

  render() {
    return (
      <div className="task">
        <h2>{this.state.time}</h2>
        <p>{this.state.text}</p>
        <button onClick={this.handleClick.bind(this)}>Eliminar tarea</button>
      </div>
    )
  }
}
