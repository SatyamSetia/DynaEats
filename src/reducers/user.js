import type from '../constants/actionTypes'

const user = (state = null, action) => {
  switch(action.type) {
    case type.LOGIN_USER: return action.payload
    case type.LOGOUT_USER: return null
    default: return state
  }
}

export default user
