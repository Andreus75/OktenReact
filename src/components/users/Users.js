import {useEffect, useState} from "react";
import {getUsers} from "../../services/userServices";
import User from "../user/User";
import UserDetail from "../userDetail/UserDetail";
import {Route} from "react-router-dom";

export default function Users (props) {

    let {match: {url}, history} = props;

    let [users, setUsers] = useState([]);

    useEffect(async () => {
        let response = await getUsers();
        setUsers([...response]);
    },[])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value} history={history}/>)
            }
            <hr/>

            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetail {...props}/>
            }}/>
        </div>
    );
}
