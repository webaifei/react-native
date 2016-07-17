import React, {Component} from 'react'
import {
  AppRegistry,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  render(){
    return (
      <View>
        <Text style={styles.title}>
          handle input
        </Text>
        <View>
          <TextInput placeholder="input some words" style={styles.input}
          onChangeText={(text)=>this.setState({text})}
          />
          <Text style={styles.show}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container:{

  },
  title:{
    marginTop: 30,
    fontSize: 20,
    color: '#ccc',
    textAlign: 'center'
  },
  input:{
    height: 40,
    padding: 10,
    borderColor: '#ddd'
  },
  show:{
    padding: 20,
    fontSize:30
  }
})

AppRegistry.registerComponent('App', ()=>App)
