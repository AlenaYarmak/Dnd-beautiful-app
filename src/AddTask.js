import React from "react";
import { Component } from "react";
import InitialState from './InitialState';

import { useEffect } from "react";

class AddTask extends Component {

    /* constructor(props) {
        super(props);
        this.state = {
          newTask: '',
        };
      } */
      state = InitialState;

      /* handleNewTaskChange = (event) => {
        this.setState({ newTask: event.target.value });
        this.setState({ newTask: 'Test passed'})
      }; */

      handleAddTask = (e) => {
        /* let newTaskId = Date.now(); */
        /* let newTaskId = "task-" + (Object.keys(InitialState.tasks).length + 1);
        const newTaskContent = this.state.newTask; */

        const taskId = 'task-9';
        const newTask = 'Test passed';

        const task = {id: 'task-9', content: newTask};
        const newTaskIds = ['task-1', 'task-2', 'task-3', 'task-4', 'task-9'];

        const newState = {
          tasks: {
            ...InitialState.tasks,
            [taskId]: task
          },
          columns: {
            ...InitialState.columns,
            'column-1': {
              id: 'column-1',
              title: 'To do',
              taskIds: newTaskIds
            }
          },
          columnOrder: [...InitialState.columnOrder]
        }

        console.log(newState);

        /* if (InitialState !== newState) {
          this.setState(newState);
        } */
        /* this.setState(newState); */
        /* componentDidUpdate(InitialState) {
          if (InitialState !== newState) {
            this.setState(newState);
          }
        }
        console.log(InitialState); */

        useEffect(() => {
          if (InitialState !== newState) {
            this.setState(newState);
          }
        })

        /* let updColumnTasks = InitialState.columns["column-1"].taskIds;
        let updTaskIds = updColumnTasks.push(newTaskId);

        console.log(updColumnTasks);
        console.log(updTaskIds);
        console.log(InitialState); */
        /* let newTasks = InitialState.tasks;
        newTasks[newTaskId] = {id: newTaskId, content: newTaskContent}
        console.log(InitialState); */

        /* let updState = {
            tasks: newTasks,
            columns: {
                ...InitialState.columns,
                'column-1': {
                    id: 'column-2',
                    title: 'In Progress',
                    taskIds: updColumnTasks}

            },
            columnOrder: [...InitialState.columnOrder]
        } */

        /* if (InitialState !== updState) {
          this.setState(updState);
        } */

        /* console.log(InitialState); */
        /* console.log(updState); */
        

      }

    render() {
        return (
            <div className="input-group mb-3 w-25 mt-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your task" 
                aria-label="Enter your task" 
                aria-describedby="button-addon2"
                onChange={this.handleNewTaskChange}></input>
                <button 
                className="btn btn-light btn-outline-dark" 
                type="button" 
                id="button-addon2"
                onClick={this.handleAddTask}>Add Task</button>
            </div>
        )
    }
}

export default AddTask;