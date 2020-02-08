import React, { Component } from 'react';
import { connect } from 'react-redux'

import fetchUser from '../services/user'
import { loginUser } from '../actions/user'

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state
    const userResponse = fetchUser({username, password})

    if(!userResponse.error) {
      this.props.dispatch(loginUser(userResponse.data))
      this.props.history.push('/home')
    } else {
      console.log(userResponse)
    }

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" placeholder="username" value={this.state.username} onChange={(event) => this.handleUsernameChange(event)}/>
        <input type="password" placeholder="password" value={this.state.password} onChange={(event) => this.handlePasswordChange(event)}/>
        <input type="submit" value="Login"/>
      </form>
    )
  }
}

export default connect()(LoginForm)
