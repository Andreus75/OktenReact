export default function User ({user, user: {address} , user: {company}}) {
    return (
        <div>
            <h3>{user.id} user : {user.name} {user.username}</h3>
            <h4>email : {user.email}</h4>
        </div>
    );
}