import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form>
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