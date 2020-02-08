import React from 'react'
import { connect } from 'react-redux'

import logo from '../logo.png'

import { logoutUser } from '../actions/user'

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo"/>
      <div className="user_info">
        <span>User: {props.user.username}</span>
        <button onClick={() => props.dispatch(logoutUser())} className="btn_logout">Logout</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Header)
