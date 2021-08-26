import {useEffect, useState} from "react";
import {getComment} from "../../services/CommentService";

export default function CommentDetail (props) {

    let {match:{params:{id}}} = props;

    let [comment, setComment] = useState({});

    useEffect(() => {
        getComment(id).then(value => setComment({...value}));
    },[id])
    return (
        <div>
            <h3>Comment info : </h3>
            <h3>{comment.id}. Name : {comment.name}</h3>
            <h3>Email : {comment.email}</h3>
            <p>{comment.body}</p>
        </div>
    );
}