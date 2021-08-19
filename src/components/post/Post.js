export default function Post ({post}) {
    return (
        <div>
            {post.id}. Title : {post.title}. Body : {post.body}
        </div>
    );
}