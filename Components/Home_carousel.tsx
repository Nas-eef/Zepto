import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const images = [
  require('../Assets/Images/Carousel1/img1.png'),
  require('../Assets/Images/Carousel1/img2.png'),
  require('../Assets/Images/Carousel1/img3.png'),
  require('../Assets/Images/Carousel1/img4.png'),
  require('../Assets/Images/Carousel1/img5.png'),
];

const Home_carousel = () => {
  const renderItem = ({item}) => (
    <Image source={item} style={styles.carouselImage} />
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={375}
        itemWidth={311}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: 311,
    height: 158,
    borderRadius: 10,
  },
});

export default Home_carousel;
