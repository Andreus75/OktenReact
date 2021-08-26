import {useEffect, useState} from "react";
import {getUser} from "../../services/userServices";
import "./UserDetail.css"
import Address from "../address/Address";
import Company from "../company/Company";

export default function UserDetail (props) {

    let {match:{params:{id}}} = props;
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    },[id])

    let {address, company} = user;
    return (
        <div className={'user_detail'}>
            <h3>{user.id}. {user.name}. </h3>
            <div className={'psevdonim_email'}>
                <h4>UserName : {user.username}</h4>
                <h4>Email : {user.email}</h4>
            </div>
            <div className={'phone_website'}>
                <h4>Phone : {user.phone}</h4>
                <h4>Website : {user.website}</h4>
            </div>
            <div className={'address_company'}>
                <div className={'address'}>
                    <Address address={address}/>
                </div>
                <div className={'company'}>
                    <Company company={company}/>
                </div>

            </div>
        </div>
    );
}