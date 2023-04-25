import React from "react";
import { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

class Task extends Component {
    render() {
        
        const { task, onDeleteTask } = this.props;
        console.log(task);
        console.log(onDeleteTask);
   
        return(
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
                >
                    {provided => (

                            <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className='bg-white mb-2 p-2 rounded d-flex justify-content-between align-items-center'>{this.props.task.content}
                            <button onClick={() => onDeleteTask(task.id)}
                            className='btn btn-danger m-2'
                            >Delete</button>
                            </div>

                     
                    )}
            </Draggable>
        )
    }
}

export default Task;