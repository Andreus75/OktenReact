import {useEffect, useState} from "react";
import {getComments} from "../../services/commentsService";
import Comment from "../comment/Comment";

export default function Comments () {

    let [comments, setComment] = useState([]);

    useEffect(() => {
        return getComments().then(value => setComment([...value]));
    })

    return (
        <div>
            <h3>Comments :</h3>
            {
                comments.map(value => <Comment key={value.id}/>)
            }
        </div>
    );
}