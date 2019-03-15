import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

it('Main App renders without crashing', () => {
    shallow(<App />);
});