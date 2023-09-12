import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { exploreNewProducts, sweets } from './Fav-Items';
import { useCart } from './context/CartContext';

const Home_ExploreNewcatgr = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore New Categories</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
          <FlatList
            style={{ width: '100%', marginLeft: 10 }}
            data={exploreNewProducts}
            renderItem={({ item }) => (
              <View>
                <Image style={{ width: 104, height: 132, marginLeft: 10 }} source={item.img} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={8}
          />
        </ScrollView>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Late Night Sweetness</Text>
        <Text style={styles.seeAll}>See All &gt;</Text>
      </View>
      <ImageBackground
        source={require('../Assets/Images/Home_Explore/bg.webp')}
        style={styles.containerImage}
        resizeMode="stretch"
      >
        <View style={styles.Bgmain}>
        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
          <FlatList
            style={{ paddingLeft: 200, width: '100%', marginLeft: 0 }}
            data={sweets}
            renderItem={({ item }) => (
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
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={8}
           
          />
          
        </ScrollView>
        
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home_ExploreNewcatgr;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
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
  scrollContainer: {
    marginBottom: 10,
  },
  containerImage: {
    marginBottom: 10,
  },
  Bgmain:{
  },
  itemContainer: {
    marginHorizontal: 5,
    marginVertical:10
  },
  itemBox: {
    width: 149,
    backgroundColor: 'white',
    minHeight: 220,
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
    width:'90%'
  },
  itemName: {
    color: 'black',
    paddingVertical: 5,
    fontSize: 13,
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
