'use client'

import { createContext, useState, useEffect } from "react";

export const myContext = createContext();

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);  // state to keep track of cart count

    const addToCart = (ProductData) => {
        setCart([...cart, { ...ProductData, qnt: 1 }]);
        console.log([...cart, ProductData]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    // Update the count whenever the cart changes
    useEffect(() => {
        setCount(cart.length);
    }, [cart]);

    return (
        <myContext.Provider value={{ addToCart, cart, setCart, count, removeFromCart }}>
            {children}
        </myContext.Provider>
    );
};

