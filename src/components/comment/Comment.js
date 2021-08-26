export default function Comment ({comment, history}) {

    const InfoComment = () => {
        history.push('/comments/' + comment.id);
    }

    return (
        <div>
            {comment.id}.{comment.name}.{comment.email} - <button onClick={InfoComment}>Information</button>
        </div>
    );
}