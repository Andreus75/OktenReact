import Address from "../address/Address";

export default function User ({user, user: {address} , user: {company}}) {
    return (
        <div>
            <h3>{user.id} user : {user.name} {user.username}</h3>
            <h4>email : {user.email}</h4>
            <Address/>
            <h4>phone : {user.phone}</h4>
            <h4>website : {user.website}</h4>

        </div>
    );
}