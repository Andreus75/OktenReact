let url = 'https://jsonplaceholder.typicode.com/posts';

let getPosts = () => {
    return fetch(url)
        .then(value => value.json());
}

export {getPosts}