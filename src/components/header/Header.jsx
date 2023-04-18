import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user,SingOutUser} = useContext(AuthContext);
    console.log(user);
    const handleLogOut=()=>{
        SingOutUser()
        .then(()=>{ })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='page-list'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup">SingUp</Link>
                {user && <span className='text-white'>Welcome, {user.displayName} <button onClick={handleLogOut}>LogOut</button> </span> }
            </div>
        </nav>
    );
};

export default Header;