import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../../Providers/AuthProviders';


const Login = () => {
    const {SingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);

    const from = location?.state?.from?.pathname || '/';

    const handlelogin = event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        form.reset();

        SingIn(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handlelogin}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <button className='btn-submit'>Login</button>
            </form>
            <p><small>New To Ema-Jhon? <Link to='/singup'>Create Account</Link></small></p>
        </div>
    );
};

export default Login;