import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Component } from 'react';
import InitialState from './InitialState';
import Form from './Form';
import Main from './Main'

import './App.css';

class App extends Component {
  state = InitialState;

  constructor(props) {
    super(props);
    this.state = {
      // Keep the other properties from the initial state
      ...this.state,
      isAuthenticated: true,
    };
  }

  render() {
    /* const {isAuthenticated} = this.state; */
    return (
      <BrowserRouter>
        <div className='bg-primary-subtle w-100 vh-100'>
            <div className='container h-50'>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/form' element={<Form />} />
              </Routes>
            </ div> 
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
