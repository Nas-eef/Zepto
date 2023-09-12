import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from './Fav-Items'
import { useCart } from './context/CartContext';

const Home_FavPicks = () => {
  const { addToCart, cartItems, decreaseQuantity } = useCart();

  const renderItemButton = (item) => {
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (cartItem) {
      return (
        <View style={{ width:60,borderRadius: 9, padding: 5, flexDirection: 'row', backgroundColor: 'red', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <Text style={{ fontSize: 15, color: 'white' }}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, color: 'white' }}>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={() => addToCart(item.id)}>
            <Text style={{ fontSize: 15, color: 'white' }}>+</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item.id)}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      );
    }
  };  
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Favourite Picks</Text>
        <Text style={styles.seeAll}>See All &gt;</Text>
      </View>
      <ScrollView horizontal style={{width:"100%",marginHorizontal:10}} showsHorizontalScrollIndicator={false}>
      {products.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
            <View style={styles.itemBox} key={item.id}>
              <Image source={item.img} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemInfo}>{item.weight}</Text>
                <View style={styles.itemPriceRow}>
                <Text style={styles.itemPrice}>${item.price}</Text>
                {renderItemButton(item)}
              </View>
              </View>
            </View>
        
        </View>
          ))}
      </ScrollView>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
    <Image source={require('../Assets/Images/Home_Item/banner.webp')} style={{width:343,height:118}}/>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 320,
    width: '100%',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
    color: 'black',
  },
  seeAll: {
    fontWeight: '500',
    fontSize: 16,
    color: 'red',
  },
  itemContainer: {
    marginHorizontal: 5,
  },
  itemBox: {
    width: 149,
    backgroundColor: 'white',
    height: 250,
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    elevation: 5,
  },
  itemImage: {
    width: 86,
    height: 86,
  },
  itemDetails: {
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 10,
  },
  itemName: {
    color: 'black',
    paddingVertical: 5,
    fontSize:13,
  },
  itemInfo: {
    color: 'gray',
    paddingVertical: 5,
    fontSize: 10,
  },
  itemPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  itemPrice: {
    color: 'black',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  addButton: {
    padding: 8,
    borderRadius: 7,
    borderColor: 'red',
    borderWidth: 1,
  },
  addButtonText: {
    color: 'red',
  },
});

export default Home_FavPicks;
