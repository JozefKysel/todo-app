import { combineReducers } from 'redux';
import { todoReducer, errorReducer } from './todoReducer';

export default combineReducers({
  todos: todoReducer,
  errors: errorReducer
});
