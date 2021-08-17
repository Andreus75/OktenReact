export default function Comment ({comment}) {
    return (
        <div>
            <h4>{comment.id}. {comment.name}</h4>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
}