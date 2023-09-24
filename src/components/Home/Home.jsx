import { Link } from 'react-router-dom';
import homePhoto from '../../assets/home.png';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='info-container'>
                <div>
                    <p>Sale up to 70% off</p>
                    <h1>New Collection For Fall</h1>
                    <h5>Discover all the new arrivals of ready-to-wear collection.</h5>
                    <Link to={`/products`}>SHOP NOW</Link>
                </div>
                <div className='home-img'>
                    <img src={homePhoto} alt="photo" />
                </div>
            </div>
        </div>
    );
};

export default Home;