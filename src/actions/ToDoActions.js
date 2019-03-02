import dispatcher from "../dispatcher";

export function createToDo(todo) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text: todo
  });
}
