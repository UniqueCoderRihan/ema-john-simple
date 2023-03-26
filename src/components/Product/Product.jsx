import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,seller,price,img, ratings} = props.product;
    const cartHandaler = props.cartHandaler;
    // console.log(cartHandaler);
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={()=>cartHandaler(props.product)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;