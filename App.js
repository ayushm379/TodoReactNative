import React, {useState} from 'react';
import {StyleSheet, StatusBar, SafeAreaView, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItems';
import Additem from './components/Additem';
import GenerateRandom from './components/GenerateRandomNumber';

const App = () => {
  const color = 'darkblue';
  const [items, setItems] = useState([
    {
      id: GenerateRandom(),
      text: 'Milk',
    },
    {
      id: GenerateRandom(),
      text: 'Bread',
    },
    {
      id: GenerateRandom(),
      text: 'Oats',
    },
    {
      id: GenerateRandom(),
      text: 'Orange Juice',
    },
    {
      id: GenerateRandom(),
      text: 'Chocolates',
    }
  ]);

  const checkItem = (id) => {
    setItems( prevItems =>{
      return prevItems.filter( item => item.id != id );
    });
  };
  
  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please Enter some text');
    }else{
      setItems(prevItems=>{
        return [{id: GenerateRandom(), text}, ...prevItems];
      });
    }
  }

  return(
    <SafeAreaView style={style.container}>
      <Header title = "Todo List" color = {color} />
      <Additem addItem = {addItem}/>
      <FlatList
        data = {items}
        renderItem = { ({item})=> <ListItem  item={item} checkItem = {checkItem}/> }
      />

      <StatusBar
       backgroundColor = {color}
      />
    </SafeAreaView>
    )
};

const style = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: '#D3D3D3'
  }
});

export default App;