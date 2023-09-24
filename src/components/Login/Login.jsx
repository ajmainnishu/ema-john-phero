import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import GooglePhoto from '../../assets/google.svg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(() => {
                toast.success('Log In Successfully');
                navigate(from, {replace: true});
                form.reset();
            }).catch(error => {
                toast.warning(error.message)
            })
    }
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(() => {
                toast.success('Register Successfully');
                form.reset();
            }).catch(error => {
                toast.warning(error.message)
            })
    }

    return (
        <div className='login-container'>
            <h4 className="login-heading">Login</h4>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='login-register-text'>New to Ema-john? <Link to={`/register`}>Create New Account</Link></p>
            <div className='hr'>
                <div className='hr-left'><hr /></div>
                <div className='hr-text'>or</div>
                <div className='hr-right'><hr /></div>
            </div>
            <button onClick={handleGoogleLogIn} className='btn-google'><img src={GooglePhoto} alt="" />Continue with Google</button>
            <ToastContainer />
        </div>
    );
};

export default Login;