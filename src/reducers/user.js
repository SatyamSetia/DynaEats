import type from '../constants/actionTypes'

const user = (state = null, action) => {
  switch(action.type) {
    case type.LOGIN_USER: return action.payload
    default: return state
  }
}

export default user
