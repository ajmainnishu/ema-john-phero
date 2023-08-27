import { Link } from 'react-router-dom';
import './Login.css'
import GooglePhoto from '../../assets/google.svg'

const Login = () => {
    return (
        <div className='login-container'>
            <h4 className="login-heading">Login</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="password" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='login-register-text'>New to Ema-john? <Link>Create New Account</Link></p>
            <div className='hr'>
                <div className='hr-left'><hr /></div>
                <div className='hr-text'>or</div>
                <div className='hr-right'><hr /></div>
            </div>
            <button className='btn-google'><img src={GooglePhoto} alt="" />Continue with Google</button>
        </div>
    );
};

export default Login;