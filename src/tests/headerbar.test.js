import React from 'react';
import { shallow, mount } from 'enzyme';
import HeaderBar from '../components/header/HeaderBar';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';
import renderer from 'react-test-renderer';

it('HeaderBar renders without crashing', () => {
    shallow(<HeaderBar />);
});

it('HeaderBar renders AppBar and ToolBar properly', () => {
    const wrapper = mount(<HeaderBar />);
    expect(wrapper.contains(AppBar)).toEqual(true);
    expect(wrapper.contains(Toolbar)).toEqual(true);
  });

  it('HeaderBar renders header title properly', () => {
    const wrapper = mount(<HeaderBar />);
    expect(wrapper.find('h6').length).toEqual(1);
  });


it('HeaderBar snapshot renders correctly', () => {
  const tree = renderer
    .create(<HeaderBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});