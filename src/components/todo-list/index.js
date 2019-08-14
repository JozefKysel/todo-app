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
  if (props.filterTodos === 'ALL') todoList.push(...props.todos);
  else if (props.filterTodos === 'COMPLETE') todoList.push(...props.completed);
  else todoList.push(...props.incompleted);

  return (
    <div className='list-container'>
      {todoList.length > 0 ? todoList.map(todo => (
      <div className='list' key={todo.id}>
        <TodoItem todo={todo}/>
      </div>)
    ) : (<div>You have nothing to do </div>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    completed: state.todos.completed,
    incompleted: state.todos.incompleted,
    filterTodos: state.todos.filterTodos
  }
}

export default connect(mapStateToProps, { fetchTodos })(TodoList);
