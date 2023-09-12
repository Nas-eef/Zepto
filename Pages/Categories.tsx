import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Category from '../Components/ExploreByCategories'
import NewCategory from '../Components/NewCategory'
import Popup from './Popup'


const Categories = () => {
  return (
    <ScrollView nestedScrollEnabled={true} >
    <View style={{width:'100%',height:'100%',marginTop:10,paddingBottom:10}}>
      <Category/>
      <NewCategory/>
    </View>
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})