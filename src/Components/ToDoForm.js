import React, { Component } from 'react';

class ToDoForm extends Component {
    state = {
        text: "", 
        category: "Code"
    }

    handleSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    childClickHandler = (e) => {
        e.preventDefault()
       this.props.addTaskHandler(this.state)
    }
    
    

    render() {
        return (
            <div>
                <form onSubmit={this.childClickHandler} className="new-task-form">
                    <input onChange={this.handleSelect} type="text" name="text" placeholder="new task detail"></input>
                    <select onChange={this.handleSelect} name="category">
                        <option>Code</option>
                        <option>Food</option>
                        <option>Money</option>
                        <option>Misc</option>
                    </select>
                    <input type="submit" value="Add task"/>
                </form>
            </div>
        );
    }
}

export default ToDoForm;
