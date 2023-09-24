import './Header.css'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='header-container'>
            <img src={Logo} alt="" />
            <nav>
                <Link to="/">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                {!user && <Link to="/login">Login</Link>}
                {user &&<Link onClick={handleLogOut}>Log Out</Link>}
            </nav>
        </div>
    );
};

export default Header;