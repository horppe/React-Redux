import React, { Component } from 'react';
import TodoItem from './todoItem.js'

class TodoList extends Component {

  render() {
    var items = this.props.items.slice();
    for(var i = 0; i < items.length; i++){
      items[i] = (<TodoItem text={items[i].text} key={items[i].key} checkKey={items[i].key} checkHandler={this.props.checkHandler} delete={items[i].delete}/>);
    }
    return (
      <div className="todo-list">
        {items}
      </div>
    );
  }
}

export default TodoList;
