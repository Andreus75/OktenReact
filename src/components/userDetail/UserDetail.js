import {useEffect, useState} from "react";
import {getUser} from "../../services/userServices";
import Address from "../address/Address";
import Company from "../company/Company";

export default function UserDetail (props) {
    let {match:{params:{id}}} = props;
    console.log(id);
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    },[id])
    console.log(user);
    let {address, company} = user;
    console.log(address);
    console.log(company);
    // let {geo} = address;
    // console.log(geo);
        // let {location:{state}} = props;
    return (
        <div>
            {user.id}. {user.name}. {user.username}
            Email : {user.email}
            {/*<Address address={address}/>*/}
            {/*<Company company={company}/>*/}
            {/*{state.id}.{state.name}*/}
            {/*<br/>*/}
            {/*<h3>Email : </h3>{state.email}, <h3>Phone : </h3>{state.phone}*/}
        </div>
    );
}