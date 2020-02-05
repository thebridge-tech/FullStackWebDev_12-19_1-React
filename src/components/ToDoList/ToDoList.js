import React, { Component } from "react";
import "./ToDoList.css";

import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";

export default class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          idTask: 0,
          time: "09:00",
          text: "Pasear al perro"
        },
        {
          idTask: 1,
          time: "18:00",
          text: "Pasear otra vez al perro"
        }
      ]
    };
  }

  addTask(idTask, time, text) {
    this.setState({
      todos: [...this.state.todos, { idTask, time, text }]
    });
  }

  deleteTask(idTask) {
    /*let theTask = this.state.todos.find((task,index) =>
      task.idTask === idTask
    );

    let newTodos = this.state.todos;
    newTodos.splice();

    this.setState({ todos: newTodos });*/
    
  }

  getTasks() {
    let tasks = this.state.todos.map((task,index) =>
      <Task
        idTask={task.idTask}
        time={task.time}
        text={task.text}
        onDeleteTask={this.deleteTask.bind(this)} />
    );

    return tasks;
  }

  render() {
    return (
      <div className="todolist">
        <TaskForm onAddTask={this.addTask.bind(this)} />
        {this.getTasks()}
      </div>
    );
  }
}
