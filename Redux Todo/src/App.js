import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddTodo from './components/addNewTodo.js';
import {addTodo, deleteTodo, toggleTodo} from './actions/actionCreator';
import TodoList from './components/todo_list';

const App = props => {
  return (
    <div className="Todo">
      <AddTodo
        store={props.store}
        addTodo={props.addTodo}
      />
      <TodoList
        todos={props.todos}
        deleteTodo={props.deleteTodo}
        toggleTodo={props.toggleTodo}
      />
    </div>
  );
}


const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addTodo: (text) => {
      dispatch(addTodo(text));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
