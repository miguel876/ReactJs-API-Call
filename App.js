import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  getApiData(){
     fetch('https://hacker-news.firebaseio.com/v0/item/8863.json')
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({
        data:res.title

      });
    })
    .catch((error)=>{
      console.error(error);
    });
  }
  componentDidMount(){
    this.getApiData();
  }
  render() {
    return (
     <View>
   <Text>{this.state.data}</Text>
     </View>
    );
  }
}