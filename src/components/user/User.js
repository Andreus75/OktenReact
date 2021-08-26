
export default function User ({user, history}) {
    const navigateTo = () => {
        history.push(`/users/${user.id}`);
    };

    return (
        <div>
            {user.id}. {user.name} - <button onClick={navigateTo}>details</button>
            {/*{user.id}. {user.name} - {user.username}. Email - {user.email} -  <Link to={`/users/${user.id}`}>user detail</Link>*/}
            {/*{user.id}. {user.name} - {user.username}. Email - {user.email} - <Link to={{pathname: `/users/${user.id}`, state: user}}>user detail</Link>*/}
        </div>
    );
}

