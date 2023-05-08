import React from 'react';
import { Component } from 'react';


class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    }
  }

  handleNewTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  handleAddTask = () => {
    const newTask = this.state.newTask.trim();
    if (newTask) {
      this.props.onClick(newTask);
      this.setState({ newTask: '' });
    }
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleAddTask();
    }
  }
  
  render() {
    return (
      <div className='input-group mb-3 w-25 mt-3'>
        <input 
              type='text' 
              className='form-control' 
              placeholder='Enter your task' 
              aria-label='Enter your task' 
              aria-describedby='button-addon2'
              onChange={this.handleNewTaskChange}
              onKeyDown={this.handleKeyDown}
              /* add value to empty input after click => this.setState({ newTask: '' })*/
              value={this.state.newTask}
        />
        <button 
              className='btn btn-light btn-outline-dark' 
              type='button' 
              id='button-addon2'
              onClick={this.handleAddTask}
        >
              Add Task
        </button>
      </div>
    )
  }
 }

export default AddTask;