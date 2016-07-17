/**
 * listview  组建 用来渲染列表
 * 1. 只会显示展示到可见区域的数据 不会渲染所有的数据
 * 2. 设置dataSource 属性 使用ListView.DataSource来构建
 * 3. renderRow 属性 接受一个函数 用来渲染每一条item
 */
import React, {Component } from 'react'
import {
  AppRegistry,
  Image,
  ListView,
  Text,
  View,
  StyleSheet
} from 'react-native'

class App extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2)=>r1!=r2
    })
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
  }
  render(){

    return (
      <View>
        <Text style={styles.title}> list view </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (rowData)=><Text>{rowData}</Text>
          }
           >

        </ListView>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  title:{
    marginTop: 30,
    height: 40,
    color: '#7a99cf',
    fontSize: 30,
    textAlign:'center'
  }
})

AppRegistry.registerComponent('App', ()=>App)
