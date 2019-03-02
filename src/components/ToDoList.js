import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoStore from "../stores/ToDoStore";
import * as ToDoActions from "../actions/ToDoActions";
export default class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoStore.getAll(),
      newTodo: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    ToDoStore.on("change", () => {
      this.setState({
        todos: ToDoStore.getAll()
      });
    });
  }
  createTodo() {
    ToDoActions.createToDo(this.state.newTodo);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    const { todos } = this.state;
    const todosComponent = todos.map(todo => {
      return <ToDoItem key={todo.id} data={todo.name} isDone={todo.isDone} />;
    });
    return (
      <div className="todo-list">
        <h1> Todos </h1>
        <input type="text" name="newTodo" onChange={this.handleChange} />
        <button onClick={this.createTodo.bind(this)}> Create to-do </button>
        <ul> {todosComponent} </ul>
      </div>
    );
  }
}
