let url = 'https://jsonplaceholder.typicode.com/comments';

function getCommentsOfPost (postId) {
    return fetch(url + '?postId=' + postId)
        .then(value => value.json());
}

export {getCommentsOfPost}