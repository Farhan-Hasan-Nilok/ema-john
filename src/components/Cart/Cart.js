import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }

    let shipping = 0;
    if(total > 50){
        shipping = 2.99;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }

    const tax = (total/10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    
    const floatPoint = num =>{
        const precision = num.toFixed(2);
        return precision
    }
    return (
        <div className='cart'>
            <h3 className='order'>Order Summery</h3>
            <p className='order'>Items Ordered    <FontAwesomeIcon icon={faShoppingCart} size="lg" /><span className='counter'>{cart.length}</span></p>
            {/* <p className='total'>Order Total: ${total}</p> */}
            
            <table>
                <tbody>
                    <tr><small>Items: ${floatPoint(total)}</small></tr>
                    <tr><small>Shipping: ${shipping}</small></tr>
                    <tr><small>Estimated Tax: ${tax}</small></tr>
                    <tr className='total'>Order Total: ${grandTotal}</tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;