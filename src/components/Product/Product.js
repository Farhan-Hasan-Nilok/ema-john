import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Product = (props) => {
    const { img, name, seller, price, stock, features} = props.product;
    // console.log(props.product)
    return (
        <div className="product">
            <div className='product-image'>
                <img src={img} alt="" />
            </div>

            <div className='product-name'>
              <div>
                    <h4>{name}</h4>
                    <br />
                    {/* <p className='rating'><small><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></small></p> */}
                    <p className='info'><small>By: {seller}</small></p>
                    <p className='info'><small>Price: ${price}</small></p>
                    <p className='info'><small>Only {stock} left in the stock - Order soon</small></p>
                    <button className='main-button' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
              </div>
              <div className='specs'>  
                <h4>Features</h4>
                    <ul>
                        {
                            features.map(f => <li>{f.description}: <strong>{f.value}</strong></li>)
                        }
                    </ul>
              </div>
            </div>
        </div>
    );
};

export default Product;