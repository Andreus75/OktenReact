let url = 'https://jsonplaceholder.typicode.com/users';

function getPostsOfUser() {
    return fetch(url)
        .then(value => value.json());
}

export {getPostsOfUser}