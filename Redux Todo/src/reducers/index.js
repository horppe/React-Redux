import * as ActionTypes from '../actions/index';
import {createStore} from 'redux';

const todoReducer = (state = {todos:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
        return {
          ...state,
          todos: state.todos.concat({value:action.text, id: state.todos.length, completed: false})
        };
        break;

    case ActionTypes.TOGGLE_TODO:
    /* get the specific todo by action.id and switch the completed prop */
    var tempTodos = state.todos.slice();
    tempTodos.forEach(todo => {
      if (action.id == todo.id) {
        todo.completed = !todo.completed;
      }
    });
        return {
          ...state,
          todos: tempTodos
        };

    case ActionTypes.DELETE_TODO:
      var tempArr = [],
          tempTodos = state.todos.slice();
      tempTodos.forEach(todo => {
        if (todo.id !== action.id) {
          tempArr.push(todo);
        }
      });
      return{
        ...state,
        todos: tempArr
      }

    default: return state;
  }
}

export default createStore(todoReducer);
