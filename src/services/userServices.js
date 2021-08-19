let url ='https://jsonplaceholder.typicode.com/users';

let getUsers = () => {
    return fetch(url)
        .then(value => value.json());
}

export {getUsers}


