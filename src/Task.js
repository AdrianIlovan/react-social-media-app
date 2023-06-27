import React from "react";

const Task = (props) => {
    return (
        <div>
             <h1>{props.taskName}</h1>
             <button className="button"
                      onClick ={() => props.deleteTask(props.id)}> X </button>
            </div>
    )
}

export default Task;