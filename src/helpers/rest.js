import 'isomorphic-fetch';

function sendPostRequest(URL, dataToSend) {
    let headers  = {
        'Content-Type' : 'application/json',
    };

    return fetch(URL, {
        method      : 'POST',
        headers     : headers,
        body        : JSON.stringify(dataToSend)
    })
    .then(checkResponseStatus)
    .then(parseJSON);
}

function sendGetRequest(URL) {

    return fetch(URL)
    .then(checkResponseStatus)
    .then(parseJSON);
}

function checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

const Api =  {
    login(data) {
        const URL = '/api/login';
        return sendPostRequest(URL, data);
    },
    listAllCountries() {
        const URL = 'https://restcountries.eu/rest/v2/all';
        return sendGetRequest(URL);
    },
    search(searchTerm) {
        const URL          = '/api/search';
        const data         = {searchTerm };
        const sessionToken = localStorage.getItem('sessionToken');
        return sendPostRequest(URL, data, null, sessionToken);
    }
};

export default Api;