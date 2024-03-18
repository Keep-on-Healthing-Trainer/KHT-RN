import React from "react";
import { TextInput, StyleSheet, Text } from "react-native";
import { color } from "../../../styles/theme"
import constants from '../../../styles/constants'

const Input = ({innerText, navigation}) => {

  return (
    <TextInput style={Styles.Bottom} placeholder={innerText} secureTextEntry={true}></TextInput>
  )
  
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.Gray[0],
        marginTop: "5%",
        width: constants.width/10*7,
        padding: 10,
        alignSelf: "center",
        borderRadius: 10,
      }
})

export default Input;