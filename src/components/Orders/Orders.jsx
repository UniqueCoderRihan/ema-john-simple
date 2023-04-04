import React from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'

const Orders = () => {
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h3>This is Order Page</h3>
            </div>
            <div className='cart-container'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;