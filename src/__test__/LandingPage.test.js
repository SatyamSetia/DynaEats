import React from 'react'
import LandingPage from '../components/Home'
import { shallow } from 'enzyme';

describe('>>>L A N D I N G  P A G E --- Snapshot',()=>{

    it('renders without crashing', () => {
      shallow(<LandingPage />);
    });

});
