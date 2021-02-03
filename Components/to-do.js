import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput, } from "react-native";
import Todo from "./todo";

const TodoMake = () => {
    const [state,changeState] = useState("Taks List")
    const [text,setText] = useState()
    const [list,setList] = useState(["Hallo World"])

    //Function for adding a item
    const additem = () => {
        const updatedList = list;
        updatedList.push(text)
        setList(updatedList);
        setText('')
    }

    //Function for deleting item
    const deleteItem = (index) => {
        const updatedList = list.filter((todo) => todo !== index )
        setList(updatedList)
    }


    return (
        <View style={{ width : '80%', marginBottom : 60}}>
        <Text style={[styles.align,styles.font]}>{state}</Text>
        <ScrollView>
           {list.map((x,index) => <Todo key={index} item={x} index={index} delete={deleteItem}/>)}
        </ScrollView>   
        <View>
         <TextInput 
         value={text}
         onChangeText={(text) => setText(text)}
         style={styles.input} />
        
        
<Button title="Add Item" onPress={additem}/>
        </View>
         
            
        </View>
    )
}

const styles = StyleSheet.create({
    align : {
        alignSelf: "center"
    },
    font : {
        fontSize : 20,
        fontWeight : "bold"
    },
    input: {
        borderRadius : 5,
        borderWidth: 1,
        padding : 8,
        margin: 8
    }
})



export default TodoMake;