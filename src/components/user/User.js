export default function User ({user, choseUser}) {

    const onClickUserChose = () => {
        choseUser(user);
    }

    return (
        <div>
            <h3>{user.id} - {user.name}
            <button onClick={onClickUserChose}>show posts</button>
            </h3>
        </div>
    );
}