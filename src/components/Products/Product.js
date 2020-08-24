import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div> 
                <img src={img} alt=""/>
            </div>
            <div>
                 <h4 className="product-name">{name}</h4>
                 <br/>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small> Only {stock} left in stock - oder soon</small></p>
                <button onClick={() => props.handelAddProduct(props.product)} className="cart-btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;