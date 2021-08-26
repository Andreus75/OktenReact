let url = 'https://jsonplaceholder.typicode.com/posts';

function getPosts () {
    return fetch(url)
        .then(value => value.json());
}

function getPost (id) {
    return fetch(url + '/' + id)
        .then(value => value.json());
}

export {getPosts, getPost};