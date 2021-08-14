import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/userServices";

export default function Users () {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}