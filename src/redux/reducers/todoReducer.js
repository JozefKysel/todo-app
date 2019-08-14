import { ADD_TODO, GET_TODOS, GET_COMPLETED, UPDATE_TEXT, DELETE_TODO, TOGGLE_COMPLETION } from '../actions/types';

const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
    case GET_COMPLETED:
      return {
        ...state,
        todos: action.data
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [action.data, ...state.todos]
      }
    case DELETE_TODO:
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.data)
    }
    case UPDATE_TEXT:
    case TOGGLE_COMPLETION:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.data.id ? action.data : todo)
      }
    default:
      return state;
  }
}

export default todoReducer;
