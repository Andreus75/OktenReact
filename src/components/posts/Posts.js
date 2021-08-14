import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/postService";
import Post from "../post/Post";

export default function Posts ({user}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsOfUser(user.id)
            .then(value => setPosts([...value]))
    },[user.id]);

    return (
        <div>
            <h3>Posts : </h3>
            {
                posts.map(value => <Post post={value} key={value.id}/>)
            }
        </div>
    );
}