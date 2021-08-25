let url = 'https://jsonplaceholder.typicode.com/users';

function getUsers () {
    return fetch(url)
        .then(value => value.json());
}

function getUser (id) {
    return fetch(url + '/' + id)
        .then(value => value.json());
}

export {getUsers, getUser}

