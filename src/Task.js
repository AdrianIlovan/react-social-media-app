import React from "react";

const Task = (props) => {
    return (
        <div className="task"
        style={{backgroundColor:props.completed ? "royalblue" : "white"}}>
             <h1>{props.taskName}</h1>
             <button className="green-button"
                      onClick={() => props.completedTask(props.id)}
                      >Done</button>
             <button className="button"
                      onClick ={() => props.deleteTask(props.id)}
                      > X </button>
            </div>
    )
}

export default Task;