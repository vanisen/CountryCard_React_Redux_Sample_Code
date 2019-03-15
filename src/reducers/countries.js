import * as types from '../actions/action-types';

const initialState = { list : [], showSuggestions : false };

function getNewSelectedState(state, selectedIndex) {

  if(!selectedIndex && selectedIndex !== 0) {
      return state.list;
  } else {
      return [ state.list[selectedIndex]]
  }
}

function getNewSelectedStates(state, selectedIndexes) {

  if(selectedIndexes && selectedIndexes.length > 0) {
      return selectedIndexes.map((i) => state.list[i]);
  } else {
      return state.selectedCountries;
  }

}

function countries(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_COUNTRIES_RESULTS:
      return {
          ...state,
          list : action.countries,
          selectedCountries: action.countries
      };

 
    case types.UPDATE_SELECTED_RESULT:
          return {
              ...state,
              selectedCountries : getNewSelectedState(state, action.selectedIndex)
          };    

    case types.UPDATE_SELECTED_RESULTS:
          return {
              ...state,
              selectedCountries : getNewSelectedStates(state, action.selectedIndexes)
          }; 
    
    default:
      return state;
    }
}

export default countries;