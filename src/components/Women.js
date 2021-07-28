import React from 'react';
import {women} from '../data/products.json'
import { CartContext } from '../Providers/CartContext';


function Women({image,name,price,index}){
    const {setCart} = React.useContext(CartContext);


    const handleCart = ( event,index ) => {
        event.preventDefault();
        
        let data = women[index];

        let cartItems = localStorage.getItem('@cart');

        if(cartItems === null) {
            setCart([data]);
            return
        }

        if (cartItems !== []){
            cartItems = JSON.parse(cartItems);
            setCart([...cartItems,data]);
            return
        }
    }

    return (
        <article className="sneaker">
            <img src={image} alt="" className="sneaker__img"/>
            <span className="sneaker__name">{name}</span>
            <span className="sneaker__price">R${price}</span>
            <a 
                href="/" 
                className="button-light"
                onClick={(e) => handleCart(e,index)}
            >
                Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
            </a>
        </article>
    );
};

export default Women;