import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon  from 'react-native-vector-icons/dist/FontAwesome';

const ListItems = (props) => {
    return(
        <View>
            <TouchableOpacity style = {styles.listItem} >
                <View style = {styles.viewItem}>
                    <Text style = {styles.text}> {props.item.text} </Text>
                    <Icon name = "close" size = {20} color = "firebrick" 
                        onPress={()=> props.checkItem(props.item.id)} 
                    /> 
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,

  },
  viewItem:{
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 18
  }
});

export default ListItems;