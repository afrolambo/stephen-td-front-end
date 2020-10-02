import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Todo from './Components/Todo'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Timer from './Components/Timer'
import MySign from './Components/MySign'
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {Menu } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET", 
        headers: { Authorization: `Bearer ${token}` }, 
      })
      .then(resp => resp.json())
      .then(data => this.setState({user: data.user}))
    } else {
      this.props.history.push("/login")
    }
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
      fetch("http://localhost:3000/api/v1/login", {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json', 
          accepts: 'application/json'
        }, 
        body: JSON.stringify({ user: userInfo })
      })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt)
        this.setState({ user: data.user}, () => this.props.history.push("/"))
      })
    }

    logOutHandler = () => {
      localStorage.removeItem("token")
      this.props.history.push("/login")
      this.setState({ user: null })
    }

  render() {
    return (
      <div className="App">
       
        <NavBar user={this.state.user} clickHandler={this.logOutHandler} />
        <Switch>
          <Route exact path="/" render={()=> <Home user={this.state.user} />} />
          <Route exact path="/todo" render={() => <Todo user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login submitHandler={this.loginHandler} />} />
          <Route exact path="/signup" render={() => <Signup submitHandler={this.signupHandler}/>} />
          <Route exact path="/timer" render={() => <Timer user={this.state.user} /> } />
          <Route exact path="/mysign" render={() => <MySign user={this.state.user} /> } />

        </Switch>
        

   
      </div>
    );
  }
  
}

export default withRouter(App);
