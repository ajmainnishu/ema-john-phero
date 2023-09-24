import { Link } from 'react-router-dom';
import GooglePhoto from '../../assets/google.svg'

const Register = () => {
    return (
        <div className='login-container'>
            <h4 className="login-heading">Sign Up</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="password" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form-control">
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input type="password" name="cPassword" id="cPassword" />
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='login-register-text'>Already have an account? <Link to={`/login`}>Sign Up</Link></p>
            <div className='hr'>
                <div className='hr-left'><hr /></div>
                <div className='hr-text'>or</div>
                <div className='hr-right'><hr /></div>
            </div>
            <button className='btn-google'><img src={GooglePhoto} alt="" />Continue with Google</button>
        </div>
    );
};

export default Register;