export default function Comment ({comment}) {
    return (
        <div>
            {comment.name}  -  {comment.id}
        </div>
    );
}