import React, { Component } from 'react';
import './App.css';
import AddTodo from './Components/addToDo.js';
import TodoList from './Components/todoList.js';
import TodoItem from './Components/todoItem.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : []
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
  }

  submitHandler(event){
    event.preventDefault();
    var text = document.getElementById("todo-text").value;
    if (text.length < 1) {
      return;
    }
    var prevItems = this.state.items.slice();
    prevItems.push({text: text, key: prevItems.length + 1, delete: false});
    this.setState({items : prevItems});
    document.getElementById("todo-text").value = "";
  }
  
  deleteHandler(event){
    event.preventDefault();
    var list = this.state.items.slice();
    list = list.filter((item) => {
      return !(item.delete);
    });

    this.setState({ items : list});
  }
  checkHandler(event){
    var itemKey = event.target.getAttribute('checkKey');
    var prevItems = this.state.items.slice();
    prevItems.forEach((item) => {
      if (item.key == itemKey) {
        item.delete = !(item.delete);
      }
    })
  }



  render() {
    return (
      <div className="Todo">
        <AddTodo submitHandler={this.submitHandler} deleteHandler={this.deleteHandler} />
        <TodoList items={this.state.items} checkHandler={this.checkHandler} />
      </div>
    );
  }
}

export default App;
