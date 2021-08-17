import {useEffect, useState} from "react";
import {getPosts} from "../../services/PostService";
import Post from "../post/Post";
import "./Posts.css"
import {commentsService} from "../../services/CommentsService";
import Comment from "../comment/Comment";

export default function Posts () {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState({});
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    })

    const choseComments = (p) => {
        setPost({...p});
        commentsService(p.id).then(value => setComments(value));
    }

    return (
        <div className={'wrap'}>

            <div className={'posts-box'}>
                Posts :
                {
                    posts.map(value => <Post key={value.id}
                                             post={value}
                                             choseComments={choseComments}
                    />)
                }
            </div>
            {
                post && <div className={'chosen-comments'}>
                    {
                        JSON.stringify(post)
                    }
                    {
                        comments.map(value => <Comment key={value.id} comment={value}/>)
                    }
                </div>
            }
        </div>

    );
}