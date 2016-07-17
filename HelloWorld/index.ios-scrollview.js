/**
 * ScrollView
 */
import React, { Component } from 'react'

import {
  AppRegistry,
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'

class App extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}> ScrollView example</Text>
        <ScrollView horizontal={true}>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
        </ScrollView>
        <ScrollView horizontal={false}>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
          <Text>this is a line.</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  title:{
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
    color:'#7e837f'
  }
})
AppRegistry.registerComponent('App', ()=>App)
