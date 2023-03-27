import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [ products , setProducts ]= useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    }, [])

    // Add to cart function decleare and This will Be Export as a Prop with Components
    const cartHandaler = (product)=>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;