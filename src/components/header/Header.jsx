import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='page-list'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup">SingUp</Link>
                {user && <span>Welcome, {user.displayName}</span> }
            </div>
        </nav>
    );
};

export default Header;