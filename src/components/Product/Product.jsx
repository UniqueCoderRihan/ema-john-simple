import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {name,seller,price,img, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
        </div>
    );
};

export default Product;