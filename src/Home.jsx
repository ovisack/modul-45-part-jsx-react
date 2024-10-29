import { Outlet, useNavigation } from "react-router-dom";

import Header from "./components/Header/Header";

const Home = () => {
    const  navigation=useNavigation();
    return (
        <>
        <div>
            <Header></Header>
       <h2>this the components</h2>
       {
        navigation.state === "loading"?
        <p>Loading..</p>: <Outlet></Outlet> 
       }
          
        </div>
        </>
    );
};

export default Home;