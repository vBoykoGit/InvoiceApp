import fetch from 'isomorphic-fetch'

const apiURL = `http://127.0.0.1:3001`

const parseToJson = response => {
    const json = response.json()
    console.log(json)
    return json
}

const logError = error => console.error("Catch", error)

const checkStatus = response => {
    if (response.status >= 400) {
        throw new Error(`Bad request response from server with status: ${response.status}`);
    }
    return response
}

const checkErrors = response => response

export const fetchThenProcess = (path, method, body, headers) =>
    fetch(`${apiURL}${path}`, {
        method,
        body,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    }).then(checkStatus)
        .then(parseToJson)
        .then(checkErrors)
        .catch(logError)