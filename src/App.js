import React from 'react';
import { Component } from 'react';
/* import Button from 'react-bootstrap/Button'; */
import { DragDropContext} from 'react-beautiful-dnd';
import InitialState from './InitialState';
import Column from './Column';
import AddTask from './AddTask';

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
      const updTaskIds = column.taskIds;

      /* delete task from array */
      updTaskIds.splice(source.index, 1);
      /* add task draggableId to new place */
      updTaskIds.splice(destination.index, 0, draggableId);

      const updColumn = {
        ...column,
        taskIds: updTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [updColumn.id]: updColumn
        }
      }

      this.setState(newState);
    }

    if (destination.droppableId !== source.droppableId) {
      const srcColumn = this.state.columns[source.droppableId];
      const destColumn = this.state.columns[destination.droppableId];
      const updSrcTaskIds = srcColumn.taskIds;
      const updDestTaskIds = destColumn.taskIds;

      updSrcTaskIds.splice(source.index, 1);
      updDestTaskIds.splice(destination.index, 0, draggableId);

      const updSrcColumn = {
        ...srcColumn,
        taskIds: updSrcTaskIds
      }

      const updDestColumn = {
        ...destColumn,
        taskIds: updDestTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [updDestColumn.id]: updDestColumn,
          [updSrcColumn.id]: updSrcColumn
        }
      }
      this.setState(newState);
    }
  }

  render() {
    return (
      /* our drag and drop area */
      /* we need to call only onDragEnd */
      <div className='bg-primary-subtle w-100 vh-100'>
        <div className='container h-50'>
        <DragDropContext
        onDragEnd={this.onDragEnd}>
          <div className='row row-cols-4 pt-5'>
        {this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
        return (
            <Column key={column.id} column={column} tasks={tasks}/>
          ) 
      })}
        </div>
      </DragDropContext>
        <AddTask />
        </div>
      </div>
      
    )
  }
}

export default App;
