import React from 'react'
import { Header } from '../components/Header'
import { shallow } from 'enzyme';

describe('>>>H E A D E R --- Snapshot',()=>{

    it('renders without crashing', () => {
      let user = {
        username: 'Restaurant Manager'
      }
      shallow(<Header  user={user}/>);
    });

    it('render username on header',() => {
      let user = {
        username: 'Restaurant Manager'
      }

      const wrapper = shallow(<Header  user={user}/>);
      const loggedInUser = <span>User: Restaurant Manager</span>

      expect(wrapper.contains(loggedInUser)).toEqual(true);
    })

});
