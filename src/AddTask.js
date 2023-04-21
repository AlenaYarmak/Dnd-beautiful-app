import React from "react";
import { Component } from "react";

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
          task: "",
        };
      }

      handleAddTask = (e) => {
        console.log(1);
        console.log(this.state.task);
      }

    render() {
        return (
            <div class="input-group mb-3 w-25 mt-3">
                <input 
                type="text" 
                class="form-control" 
                placeholder="Enter your task" 
                aria-label="Enter your task" 
                aria-describedby="button-addon2"
                onChange={(e) => this.setState({ task: e.target.value })}></input>
                <button 
                class="btn btn-light btn-outline-dark" 
                type="button" 
                id="button-addon2"
                onClick={this.handleAddTask}>Add Task</button>
            </div>
        )
    }
}

export default AddTask;