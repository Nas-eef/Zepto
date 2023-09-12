import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home_carousel from '../Components/Home_carousel';
import Home_FavPicks from '../Components/Home_FavPicks';
import Home_ExploreByCategr from '../Components/Home_ExploreByCategr';
import Home_ExploreNewcatgr from '../Components/Home_ExploreNewcatgr';
import Popup from './Popup';

const Home: React.FC = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.locationText}>Bengaluru</Text>
            <View style={styles.headerIcons}>
              <Image source={require('./wallet.png')} />
              <Image source={require('../Assets/Images/person.png')} tintColor="white" />
            </View>
          </View>
          <View style={styles.searchContainer}>
            <Image source={require('./search.png')} />
            <TextInput placeholder="Search over 5000 products" placeholderTextColor="gray" />
          </View>
        </View>
        <LinearGradient
          colors={[
            '#bc2a9d',
            '#ad2496',
            '#9f1f8e',
            '#901a87',
            '#82147f',
            '#82147f',
            '#82147f',
            '#82147f',
            '#901a87',
            '#9f1f8e',
            '#ad2496',
            '#bc2a9d',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientContainer}
        >
          <View style={styles.deliveryInfoContainer}>
            <Image source={require('../Assets/Images/free.png')} style={styles.deliveryIcon} />
            <View style={styles.deliveryTextContainer}>
              <Text style={styles.deliveryTitle}>Delivering To You In</Text>
              <Text style={styles.deliveryTime}>10 Minutes</Text>
            </View>
            <Image source={require('../Assets/Images/bag.png')} style={styles.bagIcon} />
          </View>
        </LinearGradient>
        <Home_carousel />
        <Home_FavPicks />
        <Home_ExploreByCategr />
        <Home_ExploreNewcatgr />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 100,
    width: '100%',
    backgroundColor: 'purple',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 50,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
  },
  headerIcons: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'gray',
    fontSize: 17,
    paddingHorizontal: 20,
    width: '84%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: '8%',
    marginBottom: 10,
  },
  gradientContainer: {
    width: '100%',
    height: 70,
  },
  deliveryInfoContainer: {
    flexDirection: 'row',
  },
  deliveryIcon: {
    height: 64,
    width: 64,
  },
  deliveryTextContainer: {
    width: '65%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
  },
  deliveryTime: {
    fontSize: 22,
    fontWeight: '900',
    color: 'white',
  },
  bagIcon: {
    height: 64,
    width: 64,
  },
});

export default Home;
