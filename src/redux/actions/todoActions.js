import { GET_TODOS, ADD_TODO, GET_COMPLETED, UPDATE_TEXT, DELETE_TODO, COMPLETE_TODO, INCOMPLETE_TODO } from './types';

const urlToFetch = 'http://localhost:8080/todos';

export const fetchTodos = () => dispatch =>
  fetch(urlToFetch)
    .then(res => res.json())
    .then(todos => dispatch({
      type: GET_TODOS,
      data: todos
    }));

export const addTodo = text => dispatch =>
  fetch(urlToFetch, {
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
  fetch(`${urlToFetch}/completed`)
  .then(res => res.json())
  .then(todos => dispatch({
    type: GET_COMPLETED,
    data: todos
  }));

export const updateText = (id, text) => dispatch =>
fetch(`${urlToFetch}/${id}`, {
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
    type: UPDATE_TEXT,
    data: todo
  }));

export const deleteTodo = id => ({
  type: DELETE_TODO,
  data: id
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  data: id
});

export const incompleteTodo = id => ({
  type: INCOMPLETE_TODO,
  data: id
});
