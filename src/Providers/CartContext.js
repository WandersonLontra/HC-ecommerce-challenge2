import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext({});

export const CartProvider = (props) => {
    const [ cart, setCart ] = useState([]);

    useEffect(() => {
        localStorage.setItem('@cart',JSON.stringify(cart,null,2));
    },[cart]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
           {props.children} 
        </CartContext.Provider>
    );
}