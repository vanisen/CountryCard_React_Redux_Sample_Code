import Api from '../helpers/rest';
import { UPDATE_COUNTRIES_RESULTS }  from './action-types';

export function updateCountriesResults(countries) {
    return {
        type : UPDATE_COUNTRIES_RESULTS,
        countries
    };
}


export function listAllCountries() {
    return dispatch => {
        return Api.listAllCountries()
            .then( res => {
                dispatch(updateCountriesResults(res));
            });
    };
}