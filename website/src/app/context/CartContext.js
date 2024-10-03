'use client'

import { createContext,useState } from "react";

export const CartContext = createContext()  

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (ProductData) => {
        setCart([...cart, ProductData])
        console.log([...cart, ProductData])
    };

    return (
        <CartContext.Provider value={addToCart}>
          {children}
        </CartContext.Provider>
      );
};

