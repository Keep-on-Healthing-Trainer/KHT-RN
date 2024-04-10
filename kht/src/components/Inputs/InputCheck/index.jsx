import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { color } from "../../../styles/theme";
import constants from '../../../styles/constants';
import Delete from '../../../assets/icons/Delete';

const Input = ({innerText, navigation}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(innerText);
  }, []);

  const onChangeText = (innerText) => {
    setText(innerText);
  }

  return (
    <View> 
      <TextInput
        style={Styles.Bottom}
        onChangeText={onChangeText}
        >{text}</TextInput>
        <Delete style={Styles.topItem}></Delete>
    </View>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.White,
        marginBottom: "5%",
        width: constants.width/10*8,
        height: 50,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'medium',
        color: color.Black,
        borderBottomColor: color.Gray[4],
        borderBottomWidth: 1
    },
    topItem: {
        position: 'absolute',
        left: constants.width/1.4,
        top: constants.height/40
    }
})

export default Input;