import {useEffect, useState} from "react";
import {getUsers} from "../services/userServices";
import User from "../user/User";

export default function Users () {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    })


    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User user={value} key={value.id}/>)
                }
            </div>
            <div className={'chosen-posts'}>

            </div>

        </div>
    );
}