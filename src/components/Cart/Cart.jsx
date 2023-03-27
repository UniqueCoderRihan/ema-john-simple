import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {props.cart.length}</p>
            <p>Total Price:</p>
        </div>
    );
};

export default Cart;