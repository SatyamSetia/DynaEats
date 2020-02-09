import React from 'react'

import LoginForm from './LoginForm'
import logo from '../logo.png'

const LandingPage = (props) => {
  return (
    <div className="landing_page">
      <img src={logo} alt="logo" className="logo"/>
      <div>Login to continue</div>
      <LoginForm navigateToHome={() => props.history.push('/home')}/>
    </div>
  )
}

export default LandingPage
