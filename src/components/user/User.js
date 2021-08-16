export default function User ({user}) {
    return (
        <div>
            <h3>{user.id} user : {user.name} {user.username}</h3>
            <button onClick={() => console.log('posts')}>show posts</button>
        </div>
    );
}