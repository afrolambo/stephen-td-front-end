import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Todo from './Components/Todo'
import Login from './Components/Login'
import Register from './Components/Register'
import Timer from './Components/Timer'
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {Menu } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    user: { 
      username: "", 
      password: "",
      bio: "", 
      avatar: "", 
    }
  }

    registerSubmitHandler = (info) => {
      console.log(info)
      fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${info.username}`,
          password: `${info.password}`,
          bio: `${info.bio}`,
          avatar: `${info.avatar}`
        }
      })
    })
      .then(r => r.json())
      .then(this.handleResp)
    }

    handleResp = (resp) => {
      localStorage.token = resp.token 
    }
  render() {
    return (
      <div className="App">
       
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" render={() => <Register submitHandler={this.registerSubmitHandler}/>} />
        <Route exact path="/timer" component={Timer} />
        

   
      </div>
    );
  }
  
}

export default App;
