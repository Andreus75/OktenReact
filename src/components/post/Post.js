import Comments from "../comment/Comments";

export default function Post ({post}) {
    return (
        <div>
            <ul>
                <li>{post.title}</li>
                <Comments post={post}/>
            </ul>
        </div>
    );
}