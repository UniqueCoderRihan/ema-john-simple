import React from 'react';
import './Singup.css' 

const Singup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Register </h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirm' id='confirm' required />
                </div>
                <button className='btn-submit'>Login</button>
            </form>
        </div>
    );
};

export default Singup;