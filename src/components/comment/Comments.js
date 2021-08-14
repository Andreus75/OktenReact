import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../services/commentsService";
import Comment from "../../comment/Comment";

export default function Comments ({post}) {

    let [comments,setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost(post.id)
            .then(value => console.log(value))
    }, []);

    return (
        <div>
            {
                comments.map(value => <Comment comment={value}/>)
            }
        </div>
    );
}