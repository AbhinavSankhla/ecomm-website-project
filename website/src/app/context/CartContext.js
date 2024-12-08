'use client'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState, useEffect } from "react";

export const myContext = createContext();

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);  // state to keep track of cart count

    const addToCart = (ProductData) => {
        try {
            // Show toast notification
            // console.log(ProductData)
            
            toast.success('Product Added to Cart!');
            setCart((prevCart) => [...prevCart, { ...ProductData, qnt: 1 }]);
                 console.log([...cart, ProductData]);    
            

          } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Failed to add product to cart.");
          }
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

