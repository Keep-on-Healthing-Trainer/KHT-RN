import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { color } from "../../../styles/theme"
import constants from '../../../styles/constants'

const Input = (props) => {
  const innerText = props.innerText;
  const name = props.name;

  const onChangeText = (innerText) => {
    props.onGetInText(innerText);
  }

  return (
    <TextInput
    style={Styles.Bottom}
    secureTextEntry={name}
    onChangeText={onChangeText}
    placeholder={innerText}
    ></TextInput>
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