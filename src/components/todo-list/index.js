import React, { useEffect } from 'react';
import './todo-list.css';
import { TodoItem } from '../';

const TodoList = ({ todos }) => {

  return todos.length > 0 ? todos.map(todo => (
    <div key={todo.id}>
      <TodoItem todo={todo}/>
    </div>)
  ) : <div>Loading... </div>
}

export default TodoList;
