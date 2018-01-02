import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'any-string-you-like'
}

function getCards() {
    return fetch(`${API_URL}/cards`, { headers: API_HEADERS })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => {
            throw error;
        });
}

export default getCards;
