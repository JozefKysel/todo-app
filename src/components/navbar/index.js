import React, { useState } from 'react';
import { addTodo,  getCompleted} from '../../redux/actions/todoActions';
import { connect } from 'react-redux';

const Navbar = (props) => {

  const [todoText, setTodoText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (todoText.trim()) {
      props.addTodo(todoText);
    } else {
      alert('Please provide some input');
    }
  }

  const getCompletedTodos = () => props.getCompleted();
  const handleInput = e => setTodoText(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInput} placeholder='What to do?'/>
        <input type='submit'/>
      </form>
      <button onClick={getCompletedTodos}>Get completed</button>
    </div>
  );
}

export default connect(null, { addTodo, getCompleted })(Navbar);
