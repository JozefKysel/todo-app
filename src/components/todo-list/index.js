import React from 'react';
import './todo-list.css';
import { TodoItem } from '../';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {

  return todos.length > 0 ? todos.map(todo => (
    <div className='list' key={todo.id}>
      <TodoItem todo={todo}/>
    </div>)
  ) : <div>You have nothing to do </div>
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps, null)(TodoList);
