import {useEffect, useState} from "react";
import {getPost} from "../../services/PostService";

export default function PostDetail (props) {

    let {match:{params:{id}}} = props;

    let [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            <h3>Post info : </h3>
            <h4>{post.id}.{post.title}</h4>
            <h4>{post.body}</h4>
        </div>
    );
}