import { StyleSheet, Text, View,ScrollView,FlatList,Image } from 'react-native'
exploreNewProducts
import React from 'react'
import { exploreNewProducts } from './Fav-Items'

const NewCategory = () => {
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
    </View>
  )
}

export default NewCategory

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
})