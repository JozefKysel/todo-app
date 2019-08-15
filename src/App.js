import React from 'react';
import './App.css';
import { Navbar, TodoList } from './components';
import { Provider } from 'react-redux';
import store from './redux/store';

// todo
// - error handling
// - mark all as completed
// - delete all completed

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Navbar/>
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
