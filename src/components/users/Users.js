import {useEffect, useState} from "react";
import {getUsers} from "../services/userServices";
import User from "../user/User";
import "./Users.css";
import {getPostsOfUser} from "../services/postService";
import Post from "../post/Post";

export default function Users () {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const choseUser = (u) => {
      setUser({...u});
      getPostsOfUser(u.id).then(value => setPosts([...value]));
    }

    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User
                        key={value.id}
                        user={value}
                        choseUser={choseUser}
                    />)
                }
            </div>
            {
                user && <div className={'chosen-posts'}>

                    {
                       posts.map(value => <Post key={value.id} post={value}/>)
                    }
                </div>
            }


        </div>
    );
}