export default function User ({item}) {
    return (
        <div>
            <h2>key={item.id} user={item.name}</h2>
            <p>{item.email} {item.username}</p>
        </div>
    );
}