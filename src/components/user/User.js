import Address from "../address/Address";
import Company from "../company/Company";
import Posts from "../posts/Posts";

export default function User ({user, user: {address} , user: {company}}) {

    return (
        <div>
            <h3>{user.id} user : {user.name} {user.username}</h3>
            <h4>email : {user.email}</h4>
            <Address address={address}/>
            <h4>phone : {user.phone}</h4>
            <h4>website : {user.website}</h4>
            <Company company={company}/>
            <Posts user={user}/>
        </div>
    );
}