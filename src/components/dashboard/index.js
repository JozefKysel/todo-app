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
    <div>
      <TodoList todos={props.todos}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps, { fetchTodos })(Dashboard);
