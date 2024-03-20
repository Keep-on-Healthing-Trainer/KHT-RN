import React from "react";
import { TextInput, StyleSheet, Text } from "react-native";
import { color } from "../../../styles/theme"
import constants from '../../../styles/constants'

const Input = ({innerText, navigation, name}) => {

  return (
    <TextInput style={Styles.Bottom} placeholder={innerText} secureTextEntry={name}></TextInput>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.Gray[1],
        marginBottom: "5%",
        width: constants.width/10*8,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'medium',
        color: color.Black
      }
})

export default Input;