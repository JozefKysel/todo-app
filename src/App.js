import React from 'react';
import './App.css';
import { Dashboard } from './components';
import { Navbar } from './components';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Navbar/>
        <Dashboard/>
      </div>
    </Provider>
  );
}

export default App;
