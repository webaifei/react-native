import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native'

class App extends Component {
  _onpress(){
    console.log(arguments)
  }
  _onLongPress(){
    console.log(arguments)
  }
  render(){
    return (
      <View>
        <Text style={styles.title}>touchable 展示按钮</Text>

        <TouchableHighlight onPress={this._onpress}>
          <Text> click me </Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onpress} onLongPress={this._onLongPress}>
          <Text> click me </Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback>
          <View><Text>without feedback.</Text></View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    color:'#da536e',
    marginTop: 30,
    textAlign: 'center'

  }

})

AppRegistry.registerComponent('App', ()=>App)
