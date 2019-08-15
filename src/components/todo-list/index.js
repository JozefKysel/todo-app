import React, { useEffect } from 'react';
import './todo-list.css';
import { TodoItem } from '../';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions/todoActions';

const TodoList = (props) => {

  useEffect(() => {
    props.fetchTodos();
  }, []);

  const todoList = [];

  if (props.filterTodos === 'COMPLETE') {
    todoList.push(...props.completed);
  }
  else if (props.filterTodos === 'INCOMPLETE') {
    todoList.push(...props.incompleted);
  }
  else {
    todoList.push(...props.todos);
  }

  return (
    <div className='list-container'>
      <h4>Completed: {props.todos.filter(todo => todo.completed === true).length}</h4>
      {todoList.length > 0 ? todoList.map(todo => (
      <div className='list' key={todo.id}>
        <TodoItem todo={todo}/>
      </div>)) : (<div>You have nothing to do </div>)}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  completed: state.todos.completed,
  incompleted: state.todos.incompleted,
  filterTodos: state.todos.filterTodos
});

export default connect(mapStateToProps, { fetchTodos })(TodoList);
