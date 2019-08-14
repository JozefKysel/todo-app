import React, { useState } from 'react';
import './todo-item.css';
import { updateText, deleteTodo, toggleTodo } from '../../redux/actions/todoActions';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

const TodoItem = (props) => {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [textUpdate, setTextUpdate] = useState('');

  const formatDate = dateFormat(new Date(props.todo.createdDate), "mmmm dS, yyyy, h:MM")

  const handleUpdate = () => setUpdateFlag(!updateFlag);
  const handleChange = e => setTextUpdate(e.target.value);
  const handleDelete = () => props.deleteTodo(props.todo.id);
  const handleToggle = () => props.toggleTodo(props.todo);

  const handleSubmit = e => {
    e.preventDefault();
    if (textUpdate.trim()) {
      props.updateText(props.todo.id, textUpdate);
      setUpdateFlag(!updateFlag);
    }
  }

  return (
    <div className='item-handlers'>
      {updateFlag ?
        <form onSubmit={handleSubmit}>
          <input className='buttons' onChange={handleChange} type='text' placehodler='what to do?' required/>
          <input className='buttons' type='submit'/>
        </form>
        : <p>{props.todo.text}</p>}
      <p>{formatDate}</p>
      <div className='handlers'>
        <button className='buttons' onClick={handleDelete}><i className="material-icons">delete</i></button>
        <button className='buttons' onClick={handleUpdate}><i className="material-icons">edit</i></button>
        <button className='buttons' onClick={handleToggle}><i className="material-icons">{props.todo.completed ? 'done' : 'close' }</i></button>
      </div>
    </div>
  );
}

export default connect(null, { updateText, deleteTodo, toggleTodo })(TodoItem);
