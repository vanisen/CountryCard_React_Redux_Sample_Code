import React from 'react';
import renderer from 'react-test-renderer';
import CountryCard from '../components/country/CountryCard';

it('CountryCard snapshot renders correctly', () => {
    const tree = renderer
      .create(<CountryCard />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });