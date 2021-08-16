import {useEffect, useState} from "react";
import {getPostsOfUser} from "../services/postService";
import Post from "../post/Post";

export default function Posts ({user}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsOfUser().then(value => setPosts([...value]))
    })

    return (
        <div>
            {
                posts.map(value => <Post post={value} key={value.id}/>)
            }
        </div>
    );
}