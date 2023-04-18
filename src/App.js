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
    const {source, destination, draggableId} = result;

    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      const column = this.state.columns[destination.droppableId];
      const updTaskIds = this.state.columns[destination.droppableId].taskIds;
      /* delete task from array */
      updTaskIds.splice(source.index, 1);
      /* add task draggableId to new place */
      updTaskIds.splice(destination.index, 0, draggableId);

      const updColumn = {
        ...column,
        taskIds: updTaskIds
      };
      console.log(updColumn);
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [updColumn.id]: updColumn
        }
      }
      console.log(newState);

      this.setState(newState);
    }
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
