import React from 'react'

function Tasks({task, doneHandler}){

    let deleteHandler = (e) => {
        doneHandler(task) 
    }
    return <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button onClick={deleteHandler} className="delete">X</button>
    </div>
}

export default Tasks