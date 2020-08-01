import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return(
    <View style={[style.header,{backgroundColor : props.color }]}>
      <Text style={style.text}>{props.title}</Text>
    </View>
    )
};

const style = StyleSheet.create({
  header:{ 
    height: 60,
    padding: 15
  }, 
  text:{
    color: 'white',
    fontSize: 23,
    textAlign: 'center' 
  }
});

export default Header;