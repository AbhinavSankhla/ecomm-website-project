'use client'

import { createContext,useState,useEffect } from "react";


export const WishlistContext = createContext()  

export const WishlistProvider = ({children}) => {
    const [Wishlist, setWishlist] = useState([]);
    const [WishCount, setWishCount] = useState(0); 

    const addToWishlist = (ProductData) => {
        setWishlist([...Wishlist, ProductData])
        console.log([...Wishlist, ProductData])
    };

    useEffect(() => {
        setWishCount(Wishlist.length);
    }, [Wishlist]);
    
    return (
        <WishlistContext.Provider value={{addToWishlist, Wishlist, setWishlist, WishCount}}>
          {children}
        </WishlistContext.Provider>
      );
};