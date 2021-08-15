import Comments from "../comment/Comments";

export default function Post ({post}) {
    return (
        <div>
            <ul>
                <h3>Posts : </h3>
                <li>{post.title}</li>
                <Comments post={post}/>
            </ul>
        </div>
    );
}