/**
 * animation 动画
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  Text,
  Animated,
  StyleSheet
} from 'react-native'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bounce: new Animated.Value(0)
    }
  }
  componentDidMount(){
    this.state.bounce.setValue(1.5)
    Animated.spring(this.state.bounce,{
      toValue: 1,
      friction: 1,
    }).start()
  }
  render(){
    return (
      <Animated.View style={{
        flex: 1,transform:[
          {scale: this.state.bounce}
        ]
      }}>
        <Text style={styles.title}>touchable 展示按钮</Text>

      </Animated.View>
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
