
import { Link, NavLink } from 'react-router-dom'
import './Header.css'





const Header = () => {
    return (
        <div className='text'>

            <h2>Navbar</h2>
            <nav className='text'>
                <Link to="/">
                home</Link>
              
                <NavLink to='/users'> users</NavLink>
                <NavLink to="posts">Posts</NavLink>
                <NavLink to="/about"> bout </NavLink>
                <NavLink to="/contact">Connect us</NavLink>
            
            
            </nav>
            
        </div>
    );
};

export default Header;