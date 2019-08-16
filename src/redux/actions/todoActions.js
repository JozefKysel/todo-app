import { GET_TODOS, ADD_TODO, GET_COMPLETED, GET_INCOMPLETED, UPDATE_TEXT, DELETE_TODO, TOGGLE_COMPLETION, DELETE_COMPLETED, ALL_AS_COMPLETED } from './types';
import { handleErrors } from './utility';
const urlToFetchFrom = 'http://localhost:8080/todos';

export const fetchTodos = () => dispatch =>
  fetch(urlToFetchFrom)
    .then(res => {
      if (res.status >= 400) {
        throw res;
      } else {
        return res.json();
      }
    })
    .then(
      todos => dispatch({
        type: GET_TODOS,
        data: todos
      }),
      error => handleErrors(dispatch, error)
    );

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
    .then(res => {
      if (res.status >= 400) {
        throw res;
      } else {
        return res.json();
      }
    })
    .then(
      todo => dispatch({
        type: ADD_TODO,
        data: todo
      }),
      error => handleErrors(dispatch, error)
  );

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
  .then(res => {
    if (res.status >= 400) {
      throw res;
    } else {
      return res.json();
    }
  })
  .then(todo =>
    dispatch({
      type: UPDATE_TEXT,
      data: todo
    }),
    error => handleErrors(dispatch, error)
  );

export const deleteTodo = id => dispatch =>
  fetch(`${urlToFetchFrom}/${id}`, {
    method: 'DELETE'
  })
    .then(
      res => {
        if (res.status >= 400) {
          return handleErrors(dispatch, res);
        } else {
          return dispatch({
          type: DELETE_TODO,
          data: id
        })
      }
    }
  );

export const toggleTodo = todo => dispatch =>
  fetch(`${urlToFetchFrom}/${todo.id}/${todo.completed ? 'incomplete' : 'complete'}`, {
    method: 'POST',
  })
    .then(res => {
      if (res.status >= 400) {
        throw res;
      } else {
        return res.json();
      }
    })
    .then(
      res => dispatch({
        type: TOGGLE_COMPLETION,
        data: res
      }),
      error => handleErrors(dispatch, error)
    );

export const deleteCompleted = todos => dispatch => {
  todos.filter(todo => todo.completed === true).forEach(todo => {
    fetch(`${urlToFetchFrom}/${todo.id}`, {
      method: 'DELETE'
    }).then(res => {
      if (res.status >= 400) {
        return handleErrors(dispatch, res);
      }
    })
  });
  return dispatch ({
    type: DELETE_COMPLETED,
    data: todos
  })
}

export const allAsCompleted = todos => dispatch => {
  const returnTodos = todos.filter(todo => todo.completed === false).map(todo => {
    fetch(`${urlToFetchFrom}/${todo.id}/complete`, {
      method: 'POST'
    })
      .then(res => {
        if (res.status >= 400) {
          throw res;
        } else {
          return res.json();
        }
      })
      .then(
        res => todo.completed = res.completed,
        error => handleErrors(dispatch, error)
      );
      return todo;
  })
  return dispatch ({
    type: ALL_AS_COMPLETED,
    data: returnTodos
  })
}

export const getCompleted = complete => ({
  type: GET_COMPLETED,
  data: complete
});

export const getIncompleted = incomplete => ({
  type: GET_INCOMPLETED,
  data: incomplete
});
