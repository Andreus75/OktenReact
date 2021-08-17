let url = 'https://jsonplaceholder.typicode.com/users';

function getPostsOfUser(userId) {
    return fetch(url + '/' + userId + '/posts')
        .then(value => value.json());
}

export {getPostsOfUser}