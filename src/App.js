import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Todo from './Components/Todo'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Timer from './Components/Timer'
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {Menu } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    user: null
  }

    signupHandler = (userObj) => {
      console.log(userObj)
      fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ user: userObj })
    })
      .then(r => r.json())
      .then(data => this.setState({ user: data.user}))
    }

    loginHandler = (userInfo) => {
      console.log("logging in", userInfo)
    }
  render() {
    return (
      <div className="App">
       
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" render={() => <Todo user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login submitHandler={this.loginHandler} />} />
          <Route exact path="/register" render={() => <Signup submitHandler={this.signupHandler}/>} />
          <Route exact path="/timer" render={() => <Timer user={this.state.user} /> } />
        </Switch>
        

   
      </div>
    );
  }
  
}

export default App;
