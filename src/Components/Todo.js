import React from 'react';
import { CATEGORIES } from '../data'
import TaskContainer from '../Container/TaskContainer'
import Categories from './Categories'


class Todo extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ], 
    filteredTasks: [],
    categories: CATEGORIES, 
    selected: "All"
  }

  filterTasks = () => {
    if(this.state.selected === "All"){
      return this.state.tasks
    } else {
      return this.state.tasks.filter(task => task.category === this.state.selected)
    }
  }

  clickHandler = (e) => {
    let button = e.target
    this.setState({
      selected: button.innerText,
      filteredTasks: []
    })
  }

  addTaskHandler = (task) => {
    console.log(task)
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  doneHandler = (task) => {
    console.log(task)
    let newTaskList = this.state.tasks.filter(taskObj => taskObj.text !== task.text)
    this.setState({
      tasks: newTaskList
    })
  }

  render() {

    return (

      <div className="App">
        <h1>My tasks</h1>
        <Categories selected={this.state.selected} categories={this.state.categories} clickHandler={this.clickHandler}/>
        <TaskContainer taskHandler={this.addTaskHandler} tasks={this.state.tasks} done={this.doneHandler} />
      </div>
    );
  }
}
// removed from Task Container:: selectedCategory={this.state.selected} selectedTasks={this.state.filteredTasks}


export default Todo;
