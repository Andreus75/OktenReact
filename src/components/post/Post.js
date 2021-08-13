import Comments from "../comments/Comments";

export default function Post ({item}) {
    return (
        <div>
            <ul>
                <li>{item.title} - {item.id}</li>
                <Comments item={item}/>
            </ul>
        </div>
    );
}