let  url = 'https://jsonplaceholder.typicode.com';


function getPostsOfUser (userId) {
    return fetch(url + '/users/' + userId + '/posts')
        .then(value => value.json());
}

function getPost (id) {
    return fetch(url + id)
        .then(value => value.json());
}

export {getPostsOfUser, getPost}