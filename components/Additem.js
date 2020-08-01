import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/dist/FontAwesome';

const Additem = (props) => {
    const [text, setText] = useState('');
    const [disabled, setDisabled] = useState(false);
  return(
    <View>
        <TextInput 
            placeholder = "Add items..." 
            style = {styles.input} 
            onChangeText = {text => setText(text) }
            defaultValue = {text}
        />

        <TouchableOpacity style = {styles.btn} 
            onPress = { ()=>{
                setDisabled(true);
                props.addItem(text);
                setText('');
                setTimeout( ()=>{ setDisabled(false); }, 1000);
            }}
        >
        <Text style = {styles.btnText}><Icon name="plus" />  Add Item</Text>
        </TouchableOpacity>
    </View>
    )
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 60,
    fontSize: 16, 
    padding: 8
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
   fontSize:20,
   color: 'darkblue',
   textAlign: 'center' 
  } 
});

export default Additem;