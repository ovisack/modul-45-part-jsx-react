import { Link, useNavigate } from "react-router-dom";




const Post = ({post}) => {
    const {id,title}=post;


const navigate= useNavigate();
     const handleShowDetails = ()=>{

navigate(`/post/${id}`)


    }
    return (
        <div className="style">
          <h4>post of Id:{id}</h4> 
          <p>{title}</p> 
          
          <Link to={`/post/${id}`}>Post Details</Link>
       
        <Link to={`/post/${id}`}><button>show Details</button></Link>
       
       <button className="button" onClick={handleShowDetails}> click to see details</button>
        </div>
    );
};

export default Post;