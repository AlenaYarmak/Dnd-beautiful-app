import React from "react";
import { Component } from "react";
import Task from './Task'

class Column extends Component {
    render() {
        return (
            <div>
                <div className="mt-4">{this.props.column.title}</div>
                {this.props.tasks.map(task => <Task key={task.id} task={task} className='bg-light border-success m-1'></Task>)}
            </div>
            )
    }
}

export default Column;