import { Link } from 'react-router-dom';
import GooglePhoto from '../../assets/google.svg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { createUser, googleLogIn } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const cPassword = form.cPassword.value;
        if (password === cPassword) {
            createUser(email, password)
                .then(() => {
                    toast.success('Register Successfully');
                    form.reset();
                }).catch(error => {
                    toast.warning(error.message)
                })
        } else {
            toast.warn('Password Incorrect');
            return;
        }
    }
    const handleGoogleSignUp = () => {
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
            <h4 className="login-heading">Sign Up</h4>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form-control">
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input type="password" name="cPassword" id="cPassword" />
                </div>
                <input className='btn-login' type="submit" value="Sign Up" />
            </form>
            <p className='login-register-text'>Already have an account? <Link to={`/login`}>Login</Link></p>
            <div className='hr'>
                <div className='hr-left'><hr /></div>
                <div className='hr-text'>or</div>
                <div className='hr-right'><hr /></div>
            </div>
            <button onClick={handleGoogleSignUp} className='btn-google'><img src={GooglePhoto} alt="" />Continue with Google</button>
            <ToastContainer />
        </div>
    );
};

export default Register;