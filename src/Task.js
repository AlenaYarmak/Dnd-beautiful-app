import React from "react";
import { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovered: false
        }
    }

     handleMouseEnter = () => {
        this.setState({ isHovered: true });
     }

     handleMouseLeave = () => {
         this.setState({ isHovered: false });
     }

     
    render() {
        
        const { task, onDeleteTask } = this.props;

        const buttonStyle = this.state.isHovered ? 'btn btn-danger m-2' : 'btn btn-warning m-2';

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
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            className={buttonStyle}
                            >Delete</button>
                            </div>

                     
                    )}
            </Draggable>
        )
    }
}

export default Task;