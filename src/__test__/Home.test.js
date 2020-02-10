import React from 'react'
import Home from '../components/Home'
import { shallow } from 'enzyme';

describe('>>>H O M E --- Snapshot',()=>{

    it('renders without crashing', () => {
      shallow(<Home />);
    });

});
