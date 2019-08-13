import { ADD_TODO, GET_TODOS, GET_COMPLETED, UPDATE_TEXT, DELETE_TODO, COMPLETE_TODO, INCOMPLETE_TODO } from '../actions/types';

const initialState = {
  todos: [],
  todo: {}
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.data
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.data]
      }
    case GET_COMPLETED:
      return {
        ...state,
        todos: action.data
      }
    case UPDATE_TEXT:
      return {
        ...state,
        todos: [...state.todos, action.data]
      }
    default:
      return state;
  }
}

export default todoReducer;
