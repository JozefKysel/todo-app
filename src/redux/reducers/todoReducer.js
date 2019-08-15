import { ADD_TODO, GET_TODOS, GET_COMPLETED, GET_INCOMPLETED, UPDATE_TEXT, DELETE_TODO, TOGGLE_COMPLETION, DELETE_COMPLETED, ALL_AS_COMPLETED, CATCH_ERROR } from '../actions/types';

export const initialState = {
  todos: [],
  completed: [],
  incompleted: [],
  errors: [],
  filterTodos: 'ALL'
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
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
    // here is a bug when i mark all as completed and I log values it showing all as completed however buttons are not changing,
    // not sure why this is happening
    case ALL_AS_COMPLETED:
      const markAllAsDone = state.todos.map(todo => {
        if (action.data.includes(todo)) todo.completed = true;
        return todo;
      })
      return {
        ...state,
        filterTodos: 'ALL',
        todos: markAllAsDone
      }
    case DELETE_COMPLETED:
      return {
        ...state,
        filterTodos: 'ALL',
        todos: state.todos.filter(todo => todo.completed === false)
      }
    default:
      return state;
  }
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATCH_ERROR:
      console.log(action.data);
      return {
        ...state,
        errors: [...action.data]
      }
    default:
      return state
  }
}

export { todoReducer, errorReducer };
