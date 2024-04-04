import React, { createRef, useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { color } from "../../../styles/theme";
import constants from '../../../styles/constants';
import Delete from '../../../assets/icons/Delete';

const Input = ({innerText, navigation}) => {
  return (
    <View> 
      <TextInput
        style={Styles.Bottom}
        >{innerText}</TextInput>
        <Delete style={Styles.topItem}></Delete>
    </View>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.White,
        marginBottom: "5%",
        width: constants.width/10*8,
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