import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('>>>A P P --- Snapshot',()=>{

    it('renders without crashing', () => {
      shallow(<App />);
    });

});
