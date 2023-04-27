import React from 'react';
import { Component } from 'react';
/* import Button from 'react-bootstrap/Button'; */
import { DragDropContext} from 'react-beautiful-dnd';
import InitialState from './InitialState';
import Column from './Column';
/* import AddTask from './AddTask'; */

import './App.css';



class App extends Component {
  state = InitialState;

  constructor(props) {
    super(props);
    this.state = {
      // Override the 'newTask' property from the initial state
      newTask: '',
      // Keep the other properties from the initial state
      ...this.state,
    };
  }

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

  handleNewTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  makeId = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 8) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  handleAddTask = (e) => {
    const taskId = this.makeId();

        const newTask = this.state.newTask;

        const task = {id: taskId, content: newTask};
        const newTaskIds = this.state.columns['column-1'].taskIds;
        newTaskIds.push(taskId);

        const test = {tasks: {
          ...this.state.tasks,
          taskId: task
        }}
        console.log(test);

        const newState = {
          tasks: {
            ...this.state.tasks ,
            [taskId]: task
          },
          columns: {
            ...this.state.columns,
            'column-1': {
              id: 'column-1',
              title: 'To do',
              taskIds: newTaskIds
            }
          },
          columnOrder: [...this.state.columnOrder]
        }


        /* this.setState(newState); */
        
        this.setState(newState, () => {
          this.setState({ newTask: '' });
        });
      }

      handleDeleteTask = (taskId) => {
        /* console.log(taskId); */
        this.setState((prevState) => {
          // Create a new object with all tasks except for the deleted task
          const tasks = Object.keys(prevState.tasks)
            .filter((id) => id !== taskId)
            .reduce((obj, id) => {
              obj[id] = prevState.tasks[id];
              console.log(obj);
              return obj;
            }, {});
    
          // Remove the deleted task from all columns
          const columns = Object.keys(prevState.columns).reduce((obj, columnId) => {
            const column = prevState.columns[columnId];
            const taskIds = column.taskIds.filter((id) => id !== taskId);
            obj[columnId] = { ...column, taskIds };
            return obj;
          }, {});
    
          return { tasks, columns };
        });
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
            <Column key={column.id} column={column} tasks={tasks} onDeleteTask={this.handleDeleteTask}/>
          ) 
      })}
        </div>
      </DragDropContext>
      <div className="input-group mb-3 w-25 mt-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your task" 
                aria-label="Enter your task" 
                aria-describedby="button-addon2"
                value={this.state.newTask}
                onChange={this.handleNewTaskChange}></input>
                <button 
                className="btn btn-light btn-outline-dark" 
                type="button" 
                id="button-addon2"
                onClick={this.handleAddTask}>Add Task</button>
            </div>
        </div>
      </div>
      
    )
  }
}

export default App;
