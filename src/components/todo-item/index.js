import React, { useState } from 'react';
import './todo-item.css';
import { updateText } from '../../redux/actions/todoActions';
import { connect } from 'react-redux';

const TodoItem = ({ todo, updateText }) => {

  const [updateFlag, setUpdateFlag] = useState(false);
  const [textUpdate, setTextUpdate] = useState('');

  const handleClick = () => setUpdateFlag(true);
  const handleChange = e => setTextUpdate(e.target.value);
  const handleSubmit = () => updateText(todo.id, textUpdate);

  return (
    <div>
      <p>{todo.id}</p>
      {updateFlag ?
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text'/>
          <input type='submit'/>
        </form>
        : <p>{todo.text}</p>}
      <p>{todo.createdDate}</p>
      <p>{todo.completed.toString()}</p>
      <button onClick={handleClick}>Update text</button>
    </div>
  );
}

export default connect(null, { updateText })(TodoItem);
