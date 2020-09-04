import React from 'react'

class Register extends React.Component {
    state={
        user: {
            username: "sylviawoods",
            password: "whatscooking",
            bio: "Sylvia Woods was an American restaurateur who founded the sould food restaurant Sylvia's in Harlem on Lenox Avenue, New York City in 1962. She published two cookbooks and was an important figure in the community.",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg"
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    passState = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.submitHandler(this.state.user)
    }

    render() {
      return (
        <form onSubmit={this.passState} className="App">
          <h1>Register</h1>
          <div>
            <input onChange={this.changeHandler} type="text" name="username" placeholder="Username" value={this.state.user.username}/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input onChange={this.changeHandler} type="password" name="password" placeholder="Password" value={this.state.user.password} />
            <label htmlFor="password">Password</label>
          </div>
          <div>
              <input onChange={this.changeHandler} type="text-area" name="bio" placeholder="Tell us about yourself" value={this.state.user.bio}/>
              <label>Bio</label>
          </div>
          <div>
              <input onChange={this.changeHandler} type="url" name="avatar" placeholder="insert url" value={this.state.user.avatar} />
          </div>
          <input type="submit" value="Register" />
        </form>
      );
    }
  }
   
  export default Register;