export default function Post ({post}) {
    return (
        <div>
            {post.id}. {post.title}
            <h4>body : {post.body}</h4>
        </div>
    );
}