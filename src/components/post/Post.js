export default function Post ({post, choseComments}) {

    const onClickChosePost = () => {
        choseComments(post);
    }

    return (
        <div>
            {post.id}. {post.title}
            <button onClick={onClickChosePost}>Comments</button>
        </div>
    );
}