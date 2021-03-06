import React from 'react'

class Signup extends React.Component {
  state = {
    username: "", 
    password: "", 
    bio: "",
    avatar: "", 
}

changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

submitHandler= (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
}

render() {

    return ( 
            <>
                <h1>Create Account</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    <input type="text" name="bio" placeholder="Bio" value={this.state.bio} onChange={this.changeHandler} />
                    <input type="url" name="avatar" placeholder="Profile Image" value={this.state.avatar} onChange={this.changeHandler} />
                    <input type="submit" value="Sign Up
                " />
                </form>
            </>
    )
}
  }
   
  export default Signup;