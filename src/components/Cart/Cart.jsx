import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    
    for(const product of cart){
        total = total+product.price;
        shipping = shipping+ product.shipping;
        
    }
    let tax = total * 7/100;
    console.log(tax);
    const GrandTotal = total + tax+ shipping;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shiping:$ {shipping}  </p>
            <p>Tax: $ {tax.toFixed(2)} </p>
            <h6>Grand Total:${GrandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;