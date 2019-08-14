import { ADD_TODO, GET_TODOS, GET_COMPLETED, GET_INCOMPLETED, UPDATE_TEXT, DELETE_TODO, TOGGLE_COMPLETION } from '../actions/types';

const initialState = {
  todos: [],
  completed: [],
  incompleted: [],
  filterTodos: 'ALL'
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
        filterTodos: 'ALL',
        todos: action.data
      }
    case GET_COMPLETED:
      return {
        ...state,
        filterTodos: action.data,
        completed: state.todos.filter(todo => todo.completed === true)
      }
    case GET_INCOMPLETED:
      return {
        ...state,
        filterTodos: action.data,
        incompleted: state.todos.filter(todo => todo.completed === false)
      }
    case ADD_TODO:
      return {
        ...state,
        filterTodos: 'ALL',
        todos: [action.data, ...state.todos]
      }
    case DELETE_TODO:
    return {
      ...state,
      filterTodos: 'ALL',
      todos: state.todos.filter(todo => todo.id !== action.data)
    }
    case UPDATE_TEXT:
    case TOGGLE_COMPLETION:
      return {
        ...state,
        filterTodos: 'ALL',
        todos: state.todos.map(todo => todo.id === action.data.id ? action.data : todo)
      }
    default:
      return state;
  }
}

export default todoReducer;
