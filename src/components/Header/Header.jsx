import './Header.css'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
           <img src={Logo} alt="" />
           <nav>
                <Link to="/">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                <Link to="/login">Login</Link>
           </nav>
        </div>
    );
};

export default Header;