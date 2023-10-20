import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export default function MyCartProvider({ children }) {

 const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{

        const getCartFromAsync = async () => {

            const cart = await AsyncStorage.getItem('cart')
           
            if (cart !== null) {
               setCartItems(JSON.parse(cart))
            } else {
                console.log('no price');
            }
        }

        getCartFromAsync()
    
    },[])

   
   
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    console.log("added to cart .....r",cartItems);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}