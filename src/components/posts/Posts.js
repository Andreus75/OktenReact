import {useEffect, useState} from "react";
import {getPosts} from "../../services/postService";
import Post from "../post/Post";

export default function Posts () {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        return getPosts().then(value => setPosts([...value]))
    })

    return (
        <div>
            <h3>Posts : </h3>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
}