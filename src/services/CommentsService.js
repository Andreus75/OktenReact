let url = 'https://jsonplaceholder.typicode.com/posts';

function commentsService(postId) {
    return fetch(url + '/' + postId +'/comments')
        .then(value => value.json());
}

export {commentsService}