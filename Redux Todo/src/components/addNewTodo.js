import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    var text = this.state.text;
    if (text) {
      this.props.addTodo(text);
    }
    else {
      return;
    }
    this.setState({text: ''});
  }

  render() {
    return (
      <div className="addToDo">
        <form onSubmit={this.handleSubmit}>
          <label id="title" htmlFor="add_todo"> Add Todo </label><br/>
          <input
            type="text"
            name="add_todo"
            value={this.state.text}
            placeholder="Add a todo item"
            onChange={e => this.setState({text:e.target.value})}
          />
          <br/>
          <input
            id="add-btn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
