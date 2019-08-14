import React, { useEffect } from 'react';
import './dashboard.css';
import { TodoList } from '../';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions/todoActions';

const Dashboard = (props) => {

  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <div className='list'>
      <TodoList/>
    </div>
  );
}

export default connect(null, { fetchTodos })(Dashboard);
