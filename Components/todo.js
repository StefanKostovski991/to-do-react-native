import React from "react";
import { View, Text, Button, StyleSheet, } from 'react-native';

const Todo = (props) => {
    return(
     <View style={[styles.items,{ margin : 8,padding : 8}]}>
         <Text>{props.item}</Text>
         <Button title="Delete" color="red" onPress={() => props.delete(props.item)}/>
     </View>
    )
}

const styles = StyleSheet.create({
    items: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    }
})

export default Todo;