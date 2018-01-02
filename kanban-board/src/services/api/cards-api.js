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

function deleteTask(cardId, taskId) {
    return fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
        method: 'delete',
        headers: API_HEADERS
    });
}

function toggleTask(cardId, taskId, doneValue) {
    return fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
        method: 'put',
        headers: API_HEADERS,
        body: JSON.stringify({
            done: doneValue
        })
    });
}

function addTask(cardId, newTask) {
    return fetch(`${API_URL}/cards/${cardId}/tasks`, {
        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify(newTask)
    })
    .then((response) => response.json())
    .then((responseData) => {
        newTask.id=responseData.id
    });
}

export { getCards, deleteTask, toggleTask, addTask };
