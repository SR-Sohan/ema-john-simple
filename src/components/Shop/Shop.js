import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
const Shop = () => {

    const fisrtTenData = fakeData.slice(0,10);

    const [products,setProducts] = useState(fisrtTenData);
    const [cart,setCart] = useState([])

    const handelAddProduct = (product) => {
       const newCart = [...cart , product];
       setCart(newCart)
    }

    return (
        <div className="product-container">
            <div className="product-area"> 
               
                    {
                        products.map(product => <Product handelAddProduct={handelAddProduct} product={product}></Product>)
                    }
            </div>
            <div className="cart-area"> 
                   <Cart cart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Shop;