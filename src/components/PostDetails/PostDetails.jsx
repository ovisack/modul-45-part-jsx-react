import { useLoaderData, useNavigate, useParams } from "react-router-dom";




const PostDetails = () => {
    const post =useLoaderData();
const useId= useParams();
console.log(useId); 
    const {id,title,body}=post;

const navigate=useNavigate();

    const handleGoBack= ()=>{
navigate(-1);
    }
    return (
        <div>
            <h1>post details about:{id}</h1>
         <h1>title:{title}</h1>
            <h2>body:{body} </h2>
            <button className="button" onClick={handleGoBack}>GoBack</button>
        </div>
    );
};

export default PostDetails;