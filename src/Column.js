import React from "react";
import { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from './Task';


class Column extends Component {
    render() {
        return (
                <div className="bg-body-tertiary col m-2 h-auto">
                    <h5 className="text-body-secondary m-2 pt-1">{this.props.column.title}</h5>
                    {/* Droppable has 1 required prop droppableId
                    Id needs to be unique*/}
                    <Droppable className="bg-primary" droppableId={this.props.column.id}
                        >
                        {provided => (
                            <div className="h-75"
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