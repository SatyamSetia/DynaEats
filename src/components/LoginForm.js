import React, { Component } from 'react';

export default class LoginForm extends Component {

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
      console.log(this.state)
      this.props.history.push('/home')
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
