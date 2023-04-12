import React from "react";
import { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from './Task'

class Column extends Component {
    render() {
        return (
                <div>
                    <div className="mt-4">{this.props.column.title}</div>
                    {/* Droppable has 1 required prop droppableId
                    Id needs to be unique*/}
                    <Droppable droppableId={this.props.column.id}>
                        {provided => (
                            <div
                            /* assign this provided.innerRef f-in yo prop*/
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {this.props.tasks.map((task, index) => (
                                <Task key={task.id} index={index} task={task}></Task>))}
                                {provided.placeholder}
                            </div>
                        )}
                        
                    </Droppable>
                </div>
            )
    }
}

export default Column;