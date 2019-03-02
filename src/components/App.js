import React from "react";
import ToDoList from "./ToDoList";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <ToDoList className="todo-list" />;
  }
}
