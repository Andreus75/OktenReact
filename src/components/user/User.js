export default function User ({user, history}) {
    const navigateTo = () => {
        history.push(`/users/${user.id}`);
    };

    return (
        <div>
            {user.id}. {user.name} - <button onClick={navigateTo}>details</button>
        </div>
    );
}

