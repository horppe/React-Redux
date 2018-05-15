import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <div className="addToDo">
        <form>
          <p id="title"><strong>Todo App</strong></p>
          <p>
          <input type="text" id="todo-text" placeholder="Enter a Todo Item" />
          <input id="add-btn" type="submit" name="submit" value="Add" onClick={this.props.submitHandler} />
        </p>
        <p> <button id="delete-btn" name="delete" onClick={this.props.deleteHandler}> Delete </ button> </p>
        </form>

      </div>
    );
  }
}

export default AddTodo;
