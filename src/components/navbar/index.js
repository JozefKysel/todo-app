import React, { useState } from 'react';
import { addTodo,  getCompleted, getIncompleted, deleteCompleted, allAsCompleted } from '../../redux/actions/todoActions';
import './navbar.css';
import { connect } from 'react-redux';

const Navbar = (props) => {

  const [todoText, setTodoText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (todoText.trim()) {
      props.addTodo(todoText);
      setTodoText('');
    } else {
      alert('Please provide some input');
    }
  }

  const getCompletedTodos = () => props.getCompleted('COMPLETE');
  const getIncompletedTodos = () => props.getIncompleted('INCOMPLETE');
  const deleteCompletedTodos = () => props.deleteCompleted(props.todos);
  const allAsCompletedTodos = () => props.allAsCompleted(props.todos);
  const handleInput = e => setTodoText(e.target.value);

  return (
    <div className='navbar-container'>
      <h3 className='logo'>TODO APP</h3>
      <div className='input'>
        <form className='add-form' onSubmit={handleSubmit}>
          <input className='input-field' type='text' onChange={handleInput} value={todoText} placeholder='What to do?'/>
          <input className='input-field' type='submit'/>
        </form>
        <button className='input-field' onClick={getCompletedTodos}>Completed</button>
        <button className='input-field' onClick={getIncompletedTodos}>To Complete</button>
        <button className='input-field' onClick={allAsCompletedTodos}>Mark all as completed</button>
        <button className='input-field' onClick={deleteCompletedTodos}>Delete all completed</button>
      </div>
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

export default connect(mapStateToProps, { addTodo, getCompleted, getIncompleted, deleteCompleted, allAsCompleted })(Navbar);
