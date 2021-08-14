let url = 'https://jsonplaceholder.typicode.com';

function getCommentsOfPost (postId) {
    return fetch(url + '/comments?postId=' + postId );
}

export {getCommentsOfPost}