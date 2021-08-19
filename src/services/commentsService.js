let url = 'https://jsonplaceholder.typicode.com/comments';

let getComments = () => {
    return fetch(url)
        .then(value => value.json());
}

export {getComments}