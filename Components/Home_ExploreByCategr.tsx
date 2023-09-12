import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { exploreProducts } from './Fav-Items';

const ExploreByCategory = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Explore By Categories</Text>
        <Text style={styles.seeAll}>See All &gt;</Text>
      </View>
      <View style={styles.imagesContainer}>
        <Image source={require('../Assets/Images/Home_Explore/main1.webp')} style={styles.image} />
        <Image source={require('../Assets/Images/Home_Explore/main2.webp')} style={styles.image} />
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={exploreProducts}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.itemImage} source={item.img} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    height: 114,
    width: 167,
  },
  itemContainer: {
    marginLeft: 5,
    marginVertical: 5,
  },
  itemImage: {
    width: 80,
    height: 94,
    marginLeft: 10,
  },
});

export default ExploreByCategory;
