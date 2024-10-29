import { useReducer } from "react";

import { Link } from "react-router-dom";


const ErrorPage = () => {
    const error = useReducer();
    console.log(error);
    return (
        <div>
            <h2>Oops!!!!!</h2>

          
          
            <p>{error.statusText || error.message}</p>
       
       {
        error.status === 404 && <div>
<h3> page not found </h3>
<p> go back where you from </p>
<Link to="/"></Link>



            </div>
       }
       
        </div>
    );
};

export default ErrorPage;
