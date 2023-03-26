import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [ products , setProducts ]= useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, [])

    // Add to cart function decleare and This will Be Export as a Prop with Components
    const cartHandaler = (product)=>{
        console.log('added',product);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    // export data as a props
                    cartHandaler = {cartHandaler}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;