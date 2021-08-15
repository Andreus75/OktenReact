export default function Comment ({comment}) {
    return (
        <div>

            <ul>
                <h3>Comment : </h3>
                <li>name : {comment.name}</li>
                <li>email : {comment.email}</li>
                <li>name : {comment.body}</li>
            </ul>
        </div>
    );
}