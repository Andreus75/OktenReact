import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {Route} from "react-router-dom";
import {getComments} from "../../services/CommentService";
import CommentDetail from "../commentDetail/CommentDetail";

export default function Comments (props) {

    let {match:{url}, history} = props;
console.log(url);
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    },[])

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value} history={history}/>)
            }
            <hr/>
            <Route path={`${url}/:id`} render={(props) => {
                return <CommentDetail {...props}/>;
            }}/>
        </div>
    );
}