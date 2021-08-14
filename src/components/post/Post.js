export default function Post ({item}) {
    return (
        <div>
            <ul>
                <li>{item.title} - {item.id}</li>
            </ul>
        </div>
    );
}