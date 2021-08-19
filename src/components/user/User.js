export default function User ({user}) {
    return (
        <div>
            {user.id}. {user.name}. Email : {user.email}. Phone : {user.Phone}. Website : {user.website}
        </div>
    );
}