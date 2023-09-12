import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useCart } from './context/CartContext'

const Cart_Active = () => {
    const { cartItems,addToCart,decreaseQuantity,totalAmount} = useCart()
    const handleIncreaseQuantity = (itemId) => {
        addToCart(itemId);
      };
  return (
    <View style={styles.container}>
       <ScrollView>
          <View style={{marginVertical:20}}>
          {cartItems.map((item) => {
            return(
              <View style={{backgroundColor:'white',width:"90%",height:65,padding:10,marginHorizontal:'5%',marginBottom:5,borderRadius:8,flex:1,flexDirection:"row",alignItems:'center',justifyContent:'space-evenly'}}>
                <Image source={item.img} style={{width:40,height:40,marginRight:10}} />
                <View style={{flexDirection:'row',justifyContent:'space-between',width:"85%",height:'100%',alignItems:'center'}}>
                  <View style={{flexDirection:'column'}}>
                    <Text style={{color:'black',width:150,fontSize:12}}>{item.title}</Text>
                    <Text style={{color:'gray',fontSize:10}}>{item.weight}</Text>
                 </View>
                 <View style={{marginLeft:5,flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{borderRadius:9,padding:5,flex:1,flexDirection:'row',backgroundColor:'red',justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                    <Text style={{fontSize:15,color:'white'}}>-</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize:15,color:'white'}}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                    <Text style={{fontSize:15,color:'white'}}>+</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{padding:5,width:50,marginLeft:10,flexDirection:'row'}}>
                <Text style={{fontSize:15,color:'black',flexDirection:'row'}}>₹ {item.price * item.quantity}</Text>
                </View>
                </View>
                </View>
              </View>
            )
          })}
        </View>
        <View style={{width:'100%',height:170,backgroundColor:'white',flex:1,flexDirection:'column',paddingVertical:20}}>
          <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',paddingHorizontal:20,marginBottom:5}}><Text style={{color:'black',fontSize:15,fontWeight:'500'}}>Item Total</Text><Text  style={{color:'black',fontSize:15,fontWeight:'500'}} >₹{totalAmount()}</Text></View>
          <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',paddingHorizontal:20,marginBottom:5}}><Text  style={{color:'gray'}}>Handling fee</Text><Text  style={{color:'green'}} >₹5</Text></View>
          <View style={{borderBottomWidth: 0.5,borderColor: 'gray',paddingBottom: 25,flexDirection:'row',width:'100%',justifyContent:'space-between',paddingHorizontal:20,marginBottom:5}}><Text  style={{color:'gray'}}>Delivery Chargel</Text><Text  style={{color:'green'}} >₹40</Text></View>

          <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',paddingHorizontal:20,marginBottom:5}}><Text style={{color:'black',fontSize:15,fontWeight:'500'}}>To Pay</Text><Text  style={{color:'black',fontSize:15,fontWeight:'500'}} >₹{totalAmount()+40+5}</Text></View>
        </View>
        </ScrollView>
    </View>
  )
}

export default Cart_Active

const styles = StyleSheet.create(
    {
     container:{
      height:'100%',
      width:"100%",
      backgroundColor:'White'
     } 
    }
)