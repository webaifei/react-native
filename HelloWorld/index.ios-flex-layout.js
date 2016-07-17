/**
 * react 虚拟dom
 */
import React , { Component } from 'react'
// 组建 原生组建 自定义组建
import {
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

//define an class
class Hello extends Component{

  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={{flex: 1}}>
        <Image source={pic} style={styles.pic}/>
        <Text style={styles.desc}>
          hello react-native.
        </Text>
        <Text> justifyContent 默认的值是flex-start，紧贴左侧</Text>
        <View style={{flex: 1, backgroundColor: 'blue', flexDirection:'row', justifyContent:"flex-start"}}>
          <View style={{width: 100, height: 100, backgroundColor:'powderblue'}}>
          </View>
          <View style={{width: 100, height: 100, backgroundColor:'red'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'pink'}}></View>
        </View>

        <View style={{flex: 1, backgroundColor: 'blue', flexDirection:'row', justifyContent:"center"}}>
          <View style={{width: 100, height: 100, backgroundColor:'powderblue'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'red'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'pink'}}></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue', flexDirection:'row', justifyContent:"flex-end"}}>
          <View style={{width: 100, height: 100, backgroundColor:'powderblue'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'red'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'pink'}}></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue', flexDirection:'row', justifyContent:"space-between"}}>
          <View style={{width: 100, height: 100, backgroundColor:'powderblue'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'red'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'pink'}}></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue', flexDirection:'row', justifyContent:"space-around"}}>
          <View style={{width: 100, height: 100, backgroundColor:'powderblue'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'red'}}></View>
          <View style={{width: 100, height: 100, backgroundColor:'pink'}}></View>
        </View>

      </View>
    )
  }
}
// 样式
const styles = StyleSheet.create({
  pic:{
    width: 100,
    height: 100
  },
  desc:{
    textAlign: 'center',
    color: '#f00',
    fontSize: 20,
    marginTop: 10

  }
})
// 注册组建 暴露给入口文件 会编译生成对应
AppRegistry.registerComponent('Hello', ()=>Hello)
