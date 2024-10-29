
import { Link } from 'react-router-dom';
import './user.css'


const User = ({user}) => {

    const{id,name,email,phon}=user;
    return (
        <div className="style">
           <h2>Name:{name}</h2>
           <p className='text'>email:{email}</p> 
           <h2>{phon}</h2>
           <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;