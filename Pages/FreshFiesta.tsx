import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Fresh } from '../Components/Fav-Items';
import { useCart } from '../Components/context/CartContext';

const FreshFiesta = () => {
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
  };    return (
    <View style={styles.container}>
      <Image source={require('../Assets/Images/Fresh_Fiesta/bg.jpg')} style={styles.backgroundImage} />

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Late Night Sweetness</Text>
          <Text style={styles.seeAll}>See All &gt;</Text>
        </View>
        <FlatList
          style={styles.flatList}
          data={Fresh}
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
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default FreshFiesta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: 392,
    height: 288,
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    marginBottom: 10,
  },
  flatList: {
    width: '100%',
    backgroundColor: 'white',
  },
  itemContainer: {
    marginVertical: 5,
    marginLeft: 4,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 290,
    backgroundColor: 'white',
    paddingTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  itemBox: {
    width: 180,
    backgroundColor: 'white',
    minHeight: 225,
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    elevation: 5,
  },
  itemImage: {
    width: 140,
    height: 100,
  },
  itemDetails: {
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 10,
    width: '90%',
  },
  itemName: {
    color: 'black',
    fontWeight: '500',
    paddingVertical: 5,
    fontSize: 15,
  },
  itemInfo: {
    color: 'green',
    paddingVertical: 5,
    fontSize: 13,
    fontWeight: '600',
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
