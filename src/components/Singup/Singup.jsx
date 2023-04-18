import React, { useContext, useState } from 'react';
import './Singup.css' 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Singup = () => {
    const {CreateUserEmail} = useContext(AuthContext)
    const [error,setError] = useState('')
    const handleSingup =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        form.reset();
        setError('')
        if(password !==confirm){
            setError('Your Password Not Match!')
            return
        }
        else if(password <6){
            setError('Password Must Be 6 Charcter!')
        }
        CreateUserEmail(email,password)
        .then(res=>{
            console.log(console.log(res.user));
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Register </h2>
            <form onSubmit={handleSingup}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' id='confirm' required />
                </div>
                <button className='btn-submit'>Register</button>
            </form>
            <p><small>Alredy Have an Account? <Link to='/login'>Login</Link></small></p>
            <p>
                {error && <p className='text-error'>
                    {error}
                </p>}
            </p>
        </div>
    );
};

export default Singup;