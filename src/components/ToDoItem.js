import React from "react";

export default class ToDoItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isChecked: props.isDone
    };
  }
  render(props) {
    return (
      <div className="todo-item">
        <li> {this.props.data} </li>
        <input type="checkbox" checked={this.state.isChecked} />
      </div>
    );
  }
}
