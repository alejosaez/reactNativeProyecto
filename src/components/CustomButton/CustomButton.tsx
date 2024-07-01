import React, { Component } from 'react'
import { View ,Text, StyleSheet, Pressable,GestureResponderEvent} from 'react-native'

interface CustomButtonProps {
    onPress: (event: GestureResponderEvent) => void;
  }
  

const CustomButton: React.FC<CustomButtonProps> = ({onPress})=> {

    return (
     <Pressable onPress={onPress} style={style.container}>
        <Text style={style.text}>Button</Text>
     </Pressable>
    )
  }
const style=StyleSheet.create({
    container:{
        backgroundColor:"#3B71F3",
        width:"100%",
        padding:15,
        marginVertical:5,
        alignItems:"center",
        borderRadius:5,

    },
    text:{
        fontWeight:"bold",
        color:"white",
    },
})

export default CustomButton