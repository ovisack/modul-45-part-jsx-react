import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './User.css'

const Users = () => {

    const users=useLoaderData();
    console.log(users);
    return (
        <div>
            <h2> our users{users.length}</h2>
           
            <h2> fantasik vodro users ovisack roy</h2>
       <div className="User ">
        {
            users.map(user => <User key={user.id} user={user}></User>)
        }
       </div>
        </div>
    );
};

export default Users;