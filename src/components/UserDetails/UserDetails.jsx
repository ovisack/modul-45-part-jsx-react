
import { useLoaderData } from "react-router-dom";



const UserDetails = () => {
   const user= useLoaderData();
   const {name,country,img,
    website
    }=user;

    return (
        <div>
          
           <h2>Details about users: {name}</h2> 
       
         
        
       <p>website:{website}</p>
  <p>name:{country}</p>
           <img src="https://i.ibb.co.com/ThH0Pw9/461179898-1558740361702106-8647217973533395580-n.jpg" alt="" />
        </div>
    );
};

export default UserDetails;