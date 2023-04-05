import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css';

const ReviewItem = ({product,handleRemoveCart}) => {
    const {img,name,id,price,quantity} = product;
    return (
        <div className='Review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span> </p>
                <p>Quantity: <span className='orange-text'>${quantity}</span> </p>
            </div>
            <button onClick={()=>handleRemoveCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-btn' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;