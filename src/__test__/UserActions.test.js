import { loginUser, logoutUser } from '../actions/user'

describe('>>>A C T I O N --- Test UserActions',()=>{

    it('actionCreator loginUser', () => {
      const user = {
        username: 'manager',
        password: 'password'
      }

      const login = loginUser(user)

      expect(login).toEqual({
        type: 'LOGIN_USER',
        payload: user
      })
    });

    it('actionCreator logoutUser', () => {
      const logout = logoutUser()

      expect(logout).toEqual({
        type: 'LOGOUT_USER',
        payload: null
      })
    });
});
