export default function Post ({post, history}) {

    const detailTo = () => {
        history.push(`/posts/${post.id}`);
    };

    return (
        <div>
            {post.id}. {post.title} - <button onClick={detailTo}>detail</button>
        </div>
    );
}