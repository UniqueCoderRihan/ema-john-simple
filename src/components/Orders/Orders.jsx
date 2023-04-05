import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { removeFromDb } from '../../utilities/fakedb';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {

    const SavedCart = useLoaderData();
    const [cart,setCart] = useState(SavedCart);

    const handleRemoveCart = (id)=>{
        const remaining = cart.filter(product => product.id !==id);
        setCart(remaining)
        removeFromDb(id);
    }
    const handleClearCart =()=>{
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => 
                    <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveCart={handleRemoveCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                handleClearCart={handleClearCart} 
                cart={cart}>
                    <Link to='/checkout'>
                    <button>Pay <FontAwesomeIcon icon={faMoneyCheckAlt} /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;