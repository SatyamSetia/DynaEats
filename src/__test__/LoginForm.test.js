import React from 'react'
import { LoginForm } from '../components/LoginForm'
import { shallow, mount } from 'enzyme';

describe('>>>L O G I N --- Snapshot',()=>{

    it('renders without crashing', () => {
      shallow(<LoginForm />);
    });

    it('login button is disbaled by default', () => {
      const wrapper = mount(<LoginForm />);
      const loginButton = wrapper.find('input.btn_login')
      expect(loginButton.is('[disabled]')).toBe(true)
    });

    it('login form can be submitted after entering username and password', () => {
      const onSubmitForm = jest.fn();
      const wrapper = mount(<form onSubmit={onSubmitForm}/>);

      const username = wrapper.find('[type="text"]').first()
      username.value = 'manager'

      const password = wrapper.find('[type="password"]').first()
      password.value = 'password'

      wrapper.simulate('submit')

      expect(onSubmitForm).toHaveBeenCalledTimes(1)
    });

});
