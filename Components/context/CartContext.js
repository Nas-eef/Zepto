import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fresh, products, sweets } from '../Fav-Items';

export const CartContext = createContext();

const allProducts = [
  ...products,
  ...sweets,
  ...Fresh
];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCartItems(); // Load cart items from AsyncStorage on component mount
  }, []);

  useEffect(() => {
    saveCartItemsToAsyncStorage(cartItems); // Save cart items to AsyncStorage whenever cartItems change
  }, [cartItems]);

  const loadCartItems = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cartItems');
      if (cartData) {
        setCartItems(JSON.parse(cartData));
      }
    } catch (error) {
      console.error('Error loading cart items:', error);
    }
  };

  const saveCartItemsToAsyncStorage = async (items) => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart items:', error);
    }
  };

  const addToCart = (productId) => {
    const productToAdd = allProducts.find(product => product.id === productId);

    if (productToAdd) {
      const existingItem = cartItems.find(item => item.id === productId);
      if (existingItem) {
        setCartItems(prevCartItems =>
          prevCartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setCartItems(prevCartItems => [...prevCartItems, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const totalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
