import {useEffect, useState} from "react";
import {getComments} from "../../services/commentService";
import Comment from "../comment/Comment";

export default function Comments () {

    let [comments, setComment] = useState([]);

    useEffect(() => {
        getComments().then(value => setComment([...value]))
    }, []);

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}