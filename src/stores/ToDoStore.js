import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
class ToDoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 1,
        name: "Clean room",
        isDone: true
      },
      {
        id: 2,
        name: "Go to bakery",
        isDone: false
      }
    ];
  }
  createToDo(text) {
    this.todos.push({
      name: text,
      isDone: false,
      id: Date.now()
    });
    this.emit("change");
  }
  getAll() {
    return this.todos;
  }
  handleAction(action) {
    switch (action.type) {
      case "CREATE_TODO": {
        this.createToDo(action.text);
      }
    }
  }
}

const todostore = new ToDoStore();

dispatcher.register(todostore.handleAction.bind(todostore));

export default todostore;
