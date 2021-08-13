import Address from "../address/Address";
import Company from "../company/Company";
import Posts from "../posts/Posts";

export default function User ({item, item: {address}, item: {company}}) {

    return (
        <div>
            <h2>{item.id} user : {item.name} {item.username}</h2>
            <p>email : {item.email} </p>
            <Address address={address}/>
            <h4>phone : {item.phone}</h4>
            <h4>website : {item.website}</h4>
            <Company company={company}/>
            <Posts item={item}/>
        </div>
    );
}