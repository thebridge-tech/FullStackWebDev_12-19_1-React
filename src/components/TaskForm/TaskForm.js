import React, { Component } from 'react';
import "./TaskForm.css";

export default class TaskForm extends Component {
  handleSubmit(event) {
    // Don't submit yourself, please!!
    event.preventDefault();

    // Get input values from form
    let inputTime = event.target.elements.theTime.value;
    let inputText = event.target.elements.theText.value;

    // Call parent component method passing values
    this.props.onAddTask(inputTime,inputText);
  }

  render() {
    return (
      <div className="taskform">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <label htmlFor="time">Hora</label>
            <input type="text" name="theTime" />
          </div>

          <div className="row">
            <label htmlFor="text">Texto</label>
            <input type="text" name="theText" />
          </div>

          <div className="row">
            <button type="submit">Crear tarea</button>
          </div>
        </form>
      </div>
    )
  }
}
