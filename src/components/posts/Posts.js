import {useEffect, useState} from "react";
import {getPosts} from "../../services/PostService";
import Post from "../post/Post";
import {Route} from "react-router-dom";
import PostDetail from "../postDetail/PostDetail";

export default function Posts (props) {

    let {match: {url}, history} = props;
    let [posts, setPosts] = useState([]);

    useEffect(() => {
       getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            Posts :
            {
                posts.map(value => <Post key={value.id} post={value} history={history}/>)
            }
            <hr/>
            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetail {...props}/>
            }}/>
        </div>
    );
}