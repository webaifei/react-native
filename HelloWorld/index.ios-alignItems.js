import React,{ Component } from 'react'
import {
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

class StyleLayout extends Component {

  render(){

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Layout test.
        </Text>
        <View style={{
          flex: 1,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <View style={{width: 100, height: 100, backgroundColor: "pink"}}></View>
          <View style={{width: 100, height: 100, backgroundColor: "yellow"}}></View>
          <View style={{width: 100, height: 100, backgroundColor: "gray"}}></View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    color:'#999',
    textAlign: 'center',
    marginTop:30

  },
  container:{
    flex: 1
  }
})


AppRegistry.registerComponent('StyleLayout', ()=>StyleLayout)
