export default function Comment ({comment}) {
    return (
        <div>
            {comment.id}. Name : {comment.name}. Email : {comment.email}.
            {/*Body : {comment.body}*/}
        </div>
    );
}