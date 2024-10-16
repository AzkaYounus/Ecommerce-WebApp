import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        // Ensure cartItems and all_product are defined
        if (!cartItems || !all_product) return 0;
        
        // Iterate over cart items
        for (const item in cartItems) {
          
          // Check if item quantity is positive
          if (cartItems[item] > 0) {
            
            // Find matching product
            const itemInfo = all_product.find((product) => (product.id) === Number(item));
            
            // Check if product exists
            if (itemInfo) {
              
              // Add item cost to total
              totalAmount += itemInfo.new_price * cartItems[item];
            }
          }
        }
        
        // Return total after iterating over all items
        return totalAmount;
      }

const contextValue = {all_product, cartItems, addToCart, removeFromCart,getTotalCartAmount };
return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider;