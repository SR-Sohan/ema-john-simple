import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    //let totalPrice = cart.reduce((),0)

    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i].price;
        totalPrice = totalPrice + product;
    }
    let shiping = 0;
    if(totalPrice > 50 && totalPrice < 100){
        shiping = 10.99
    }else if(totalPrice > 100 && totalPrice < 200){
        shiping = 8.99;
    }else if(totalPrice > 200){
        shiping = 4.99;
    }else if(totalPrice > 0){
        shiping = 12.99;
    }
    const formatNumber = num => {
        const number = num.toFixed(2);
        return Number(number)
    }
    const tax = (totalPrice / 10).toFixed(2);

    const grandTotal = (totalPrice + shiping + Number(tax)).toFixed(2);
    
    return (
        <div>
            <h3>Oder Summery</h3>
            <h5>Items Odered: {cart.length}</h5>
            <h5>Products Price: {formatNumber(totalPrice)}</h5>
            <h5>Shiping Cost: {shiping}</h5>
            <h5> Tax: {tax}</h5>
            <h5>Total Price: {grandTotal}</h5>
        </div>
    );
};

export default Cart;