import React, { Component } from 'react';
import { connect } from 'react-redux'

import fetchUser from '../services/user'
import { loginUser } from '../actions/user'
import { saveUser } from '../utils/localStorage'

export class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    isDisabled: true,
    isError: false
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    },() => this.handleButtonState())
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    },() => this.handleButtonState())
  }

  handleButtonState() {
    let isDisabled = this.state.username.length === 0 || this.state.password.length === 0
    this.setState({
      isDisabled
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state
    const userResponse = fetchUser({username, password})

    if(!userResponse.error) {
      this.props.dispatch(loginUser(userResponse.data))
      saveUser(userResponse.data)
      this.props.navigateToHome()
    } else {
      this.setState({
        isError: true,
        errorMessage: userResponse.errorMessage
      })
    }

    this.setState({
      username: '',
      password: '',
      isDisabled: true
    })
  }

  render() {
    const { isDisabled, isError, errorMessage } = this.state

    return (
      <form onSubmit={(event) => this.handleSubmit(event)} className="login_form">
        <div className="error">{!isError?'':errorMessage}</div>
        <input type="text" placeholder="Username" value={this.state.username} onChange={(event) => this.handleUsernameChange(event)} className="input_field"/>
        <input type="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handlePasswordChange(event)} className="input_field"/>
        <input type="submit" value="Login" className="btn_login" disabled={isDisabled}/>
      </form>
    )
  }
}

export default connect()(LoginForm)
