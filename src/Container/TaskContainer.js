import React from 'react'
import Tasks from '../Components/Tasks'
import ToDoForm from '../Components/ToDoForm'

class TaskContainer extends React.Component {

    render(){
        //props 
        let tasks = this.props.tasks

        // let taskList = tasks.map(function(task, index){return <Tasks key={index} task={task} />})
        // let filteredTasks = tasks.reduce(function (newArray, task) {
        //     if(task.category === category) {
        //         newArray.push(task)
        //     }
        //     return newArray
        //     }, filteredList)


        // let filteredTaskList = filteredTasks.map(function(task, index){return <Tasks  key={index} task={task} />})
        
        // let listSorter = (tasks) => {
        //     if(category === "All"){
        //         return taskList
        //     } else {
        //         return filteredTaskList
        //     }
        // }

        const renderTasks = () => {
            return tasks.map((task, index) => <Tasks key={index} task={task} doneHandler={this.props.done}/>)
        }

        return(
            <div className="tasks">
                <h5>Tasks</h5>
                <ToDoForm addTaskHandler={this.props.taskHandler} />
                {renderTasks()}
                {/* {listSorter()} */}
            </div>
        )
    }
}

export default TaskContainer