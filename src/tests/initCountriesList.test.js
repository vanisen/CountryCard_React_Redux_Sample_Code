import reducers from '../reducers';

test('Inital state of app before getting countries list', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({countries:{list:[],showSuggestions:false}});
});
