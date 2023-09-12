import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Cart_Inactive = () => {
  return (
    <View style={styles.container}>
    <View style={{width:'100%',height:"100%",flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image style={{width:60,height:60}} source={require('../Assets/Images/emptycart.png')}/>
      <Text style={{color:'black',fontWeight:'500',fontSize:15,marginVertical:10}}>Your cart is empty</Text>
      <TouchableOpacity>
        <View style={{paddingVertical:15,paddingHorizontal:20,borderWidth:1,width:'auto',borderColor:'red',borderRadius:15}}>
          <Text style={{color:'red',fontWeight:'400',fontSize:17}}>Browse Products</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart_Inactive

const styles = StyleSheet.create(
    {
     container:{
      height:'100%',
      width:"100%",
      backgroundColor:'White'
     } 
    }
    )