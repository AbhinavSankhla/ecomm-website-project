'use client'

import { createContext,useState } from "react";

export const myContext = createContext()  

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (ProductData) => {
        setCart([...cart, {...ProductData, qnt: 1}])
        console.log([...cart, ProductData])
    };

    const count = cart.length;
    
    return (
        <myContext.Provider value={{addToCart, cart, setCart, count}}>
          {children}
        </myContext.Provider>
      );
};

