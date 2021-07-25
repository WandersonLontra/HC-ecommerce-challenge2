import { useEffect, useState } from 'react';
import {newCollection} from '../data/products.json'

function New({image, index}){
    const [ cart, setCart ] = useState([]);

    useEffect(() => {
        localStorage.setItem('@cart',JSON.stringify(cart,null,2))
    },[cart]);

    const handleCart = ( event,index ) => {
        event.preventDefault();
        
        let data = newCollection[index];

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
        <div className="new__sneaker-card">
            <img src={image} alt="" className="new__sneaker-img" />
            <div className="new__sneaker-overlay">
                <a 
                    href="/" 
                    className="button"
                    onClick={(e) => handleCart(e,index)}
                >
                    Add to Cart
                </a>
            </div>
        </div>
    );
};

export default New;