import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/postService";


export default function Posts ({item}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsOfUser(item.id).then(value =>  setPosts([...value]))
    }, [item.id]);

    return (
        <div>
            <h3>Posts :</h3>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}