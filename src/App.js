import React from 'react';
import { Component } from 'react';
/* import Button from 'react-bootstrap/Button'; */
import { DragDropContext} from 'react-beautiful-dnd';
import InitialState from './InitialState'
import Column from './Column'
import './App.css';


class App extends Component {
  state = InitialState;

  onDragEnd = (result) => {
    /*  */
  }

  render() {
    return (
      /* our drag and drop area */
      /* we need to call only onDragEnd */
      <DragDropContext
        onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
        return <Column key={column.id} column={column} tasks={tasks}/>
      })}
      </DragDropContext>
      
    )
  }
}

export default App;
