import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../services/commentService";

export default function Comments ({item}) {

    let [comments, setComment] = useState([]);

    useEffect(() => {
        getCommentsOfPost().then(value => console.log(value.name))
    }, []);

    return (
        <div>

        </div>
    );
}