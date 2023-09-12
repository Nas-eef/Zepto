import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import { NavigationContainer } from '@react-navigation/native';
import FreshFiesta from './Pages/FreshFiesta';
import Cart from './Pages/Cart';
import { CartProvider } from './Components/context/CartContext';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CartProvider>
    <NavigationContainer >
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:'purple',tabBarInactiveTintColor:'black'}} >
      <Tab.Screen  name="Home" component={Home}  options={{ 
      headerShown: false,
       tabBarIcon:({focused})=>{
        return(
          <Image source={require('./Assets/home.png')} style={{tintColor : focused ? 'purple' : 'black',height:25,width:25,resizeMode:'contain'}}/>
        )
       } 
      }}/>
<Tab.Screen
  name="categories"
  component={Categories}
  options={({ navigation }) => ({
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('./Assets/category.png')}
        style={{
          tintColor: focused ? 'purple' : 'black',
          height: 25,
          width: 25,
          resizeMode: 'contain',
        }}
      />
    ),
    headerTitle: 'All Categories',
    headerStyle:{
      backgroundColor:'purple'
    },
    headerTintColor:'white',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        // onPress={() => {
        //   navigation.goBack();
        // }}
      >
    <Image style={{tintColor:'white',width:25,height:25,marginLeft:10}} source={require('./Assets/Images/back.png')}/>        
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{ paddingRight: 10 }}
        onPress={() => {

          navigation.navigate('SearchScreen');
        }}
      >
    <Image style={{tintColor:'white',width:25,height:25,marginRight:10}} source={require('./Assets/Images/search.png')}/>        
      </TouchableOpacity>
    ),
  })}
/>

<Tab.Screen
  name="Freshfiesta"
  component={FreshFiesta}
  options={({ navigation }) => ({
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('./Assets/live.png')}
        style={{
          tintColor: focused ? 'purple' : 'black',
          height: 25,
          width: 25,
          resizeMode: 'contain',
        }}
      />
    ),
    headerTitle: 'Fresh Fiesta',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        // onPress={() => {
        //   navigation.goBack();
        // }}
      >
        <Image
          style={{ tintColor: 'black', width: 25, height: 25, marginLeft: 10 }}
          source={require('./Assets/Images/back.png')}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{ paddingRight: 10 }}
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}
      >
        <Image
          style={{ tintColor: 'black', width: 25, height: 25, marginRight: 10 }}
          source={require('./Assets/Images/search.png')}
        />
      </TouchableOpacity>
    ),
  })}
/>
<Tab.Screen
  name="Cart"
  component={Cart}
  options={({ navigation }) => ({
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('./Assets/cart.png')}
        style={{
          tintColor: focused ? 'purple' : 'black', // White tint for selected, black for others
          height: 25,
          width: 25,
          resizeMode: 'contain',
        }}
      />
    ),
    headerTitle: 'Cart',
    headerStyle: {
      backgroundColor: 'purple',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          style={{ tintColor: 'white', width: 25, height: 25, marginLeft: 10 }}
          source={require('./Assets/Images/back.png')}
        />
      </TouchableOpacity>
    ),
  })}
/>

    </Tab.Navigator>
    </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({
  bottomtab:{
    height:70,
  }
})