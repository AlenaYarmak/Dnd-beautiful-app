import React from "react";
import { Component } from "react";

class Task extends Component {
    render() {
        return(
            <div className='bg-light border border-success m-1 w-25'>{this.props.task.content}</div>
        )
    }
}

export default Task;