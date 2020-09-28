import React from 'react';
 
class Login extends React.Component {
  state = {
    username: "", 
    password: "",
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler} className="App">
        <h1>Login</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}
 
export default Login;