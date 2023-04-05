import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { removeFromDb } from '../../utilities/fakedb';

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
                cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;