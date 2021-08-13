let url = 'https://jsonplaceholder.typicode.com/comments';

function getCommentsOfPost () {
    return fetch(url)
        .then(value => value.json());
}

function getComment (id) {
    return  fetch(url  + id)
        .then(value => value.json());
}

export {getCommentsOfPost, getComment};