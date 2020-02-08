import type from '../constants/actionTypes'

export const loginUser = (user) => ({
  type: type.LOGIN_USER,
  payload: user
})
