import React from 'react';
import renderer from 'react-test-renderer';
import SearchCountry from '../components/country/SearchCountry';
import store from '../store'
import { Provider } from 'react-redux'

it('SearchCountry snapshot renders correctly', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchCountry />
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});