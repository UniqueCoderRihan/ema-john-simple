import React from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
import { useLoaderData } from 'react-router-dom';

const Orders = () => {

    const cart = useLoaderData();
    console.log(cart);

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h3>This is Order Page{cart.length} </h3>
            </div>
            <div className='cart-container'>
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;