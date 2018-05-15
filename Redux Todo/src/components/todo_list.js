import React, { Component } from 'react';
import Todo from './todo';
function  TodoList(props) {
    return (
      <div className="todo-list">
        {props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              value={todo.value}
              completed={todo.completed}
              deleteTodo={props.deleteTodo}
              toggleTodo={props.toggleTodo}
            />
          )
        })}
      </div>
    )
  }


export default TodoList;
