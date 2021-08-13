let  url = 'https://jsonplaceholder.typicode.com/users';


function getPostOfUser (userId) {
    return fetch(url + '/' + userId + '/posts')
        .then(value => value.json());
}

export {getPostOfUser}