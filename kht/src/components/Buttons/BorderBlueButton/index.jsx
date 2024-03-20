import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "../../../styles/theme"
import constants from '../../../styles/constants'

const BorderBlueButton = ({innerText, navigation, onPress}) => {

  return (
    <TouchableOpacity style={Styles.Bottom} onPress={onPress}>
        <Text style={Styles.BottomText}>{innerText}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.White,
        marginTop: "5%",
        width: constants.width/10*8,
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.Blue[10],
        padding: 10,
      },
      BottomText: {
        fontSize: 16,
        color: color.Blue[10],
        textAlign: "center",
      }
})

export default BorderBlueButton;