import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useCart } from '../Components/context/CartContext'
import Cart_Active from '../Components/Cart_Active'
import Cart_Inactive from '../Components/Cart_Inactive'

const Cart = () => {
  const { cartItems,addToCart,decreaseQuantity,totalAmount} = useCart()
  const handleIncreaseQuantity = (itemId) => {
    addToCart(itemId);
  };

  return (
    <View style={styles.container}>
      { cartItems.length === 0 ? (
    <Cart_Inactive/>): (
    <Cart_Active/>
      )}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create(
  {
   container:{
    height:'100%',
    width:"100%",
    backgroundColor:'White'
   } 
  }
  )