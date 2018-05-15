import * as ActionTypes from './index';

export const addTodo = (text) => {
  return{
    type: ActionTypes.ADD_TODO,
    text: text
  }
}

export const deleteTodo = (id) => {
  return{
    type: ActionTypes.DELETE_TODO,
    id: id
  }
}

export const toggleTodo = (id) => {
  return{
    type: ActionTypes.TOGGLE_TODO,
    id: id
  }
}
