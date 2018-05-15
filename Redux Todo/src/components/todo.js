import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Todo extends Component{

  handleDelete = () => {
    this.props.deleteTodo(this.props.id);
  }

  handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  }
  render(){
    return (
      <li
        key={this.props.id}
        className={"todo-item " + (this.props.completed? "completed" : "uncompleted")}
      >
        <span onClick={this.handleToggle}>{this.props.value}</span>
        <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }

}
Todo.propTypes = {
  id: PropTypes.number,
  completed: PropTypes.bool
}
export default Todo;
