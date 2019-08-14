import { GET_TODOS, ADD_TODO, GET_COMPLETED, UPDATE_TEXT, DELETE_TODO, TOGGLE_COMPLETION } from './types';

const urlToFetchFrom = 'http://localhost:8080/todos';

export const fetchTodos = () => dispatch =>
  fetch(urlToFetchFrom)
    .then(res => res.json())
    .then(todos => dispatch({
      type: GET_TODOS,
      data: todos
    }));

export const addTodo = text => dispatch =>
  fetch(urlToFetchFrom, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text
    })
  })
    .then(res => res.json())
    .then(todo => dispatch({
      type: ADD_TODO,
      data: todo
    }));

export const getCompleted = () => dispatch =>
  fetch(`${urlToFetchFrom}/completed`)
  .then(res => res.json())
  .then(todos => dispatch({
    type: GET_COMPLETED,
    data: todos
  }));

export const updateText = (id, text) => dispatch =>
fetch(`${urlToFetchFrom}/${id}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text
  })
})
  .then(res => res.json())
  .then(todo => {
    return dispatch({
    type: UPDATE_TEXT,
    data: todo
  })});

export const deleteTodo = id => dispatch =>
  fetch(`${urlToFetchFrom}/${id}`, {
    method: 'DELETE'
  }).then(todo => dispatch({
      type: DELETE_TODO,
      data: id
    }
  ));

export const toggleTodo = todo => dispatch =>
  fetch(`${urlToFetchFrom}/${todo.id}/${todo.completed ? 'incomplete' : 'complete'}`, {
    method: 'POST',
  })
  .then(res => res.json())
  .then(res => dispatch({
    type: TOGGLE_COMPLETION,
    data: res
  }));
