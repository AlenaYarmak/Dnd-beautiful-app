import React from "react";
import { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

class Task extends Component {
    render() {
        return(
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}>
                    {provided => (
                        <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className='bg-light border border-success m-1 w-25'>{this.props.task.content}</div>
                    )}
            </Draggable>
            
        )
    }
}

export default Task;