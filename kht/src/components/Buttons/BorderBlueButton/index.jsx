import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "../../../styles/theme"

const BorderBlueButton = ({innerText, navigation}) => {

  return (
    <TouchableOpacity style={Styles.Bottom}>
        <Text style={Styles.BottomText}>{innerText}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.White,
        marginTop: "5%",
        width: "70%",
        padding: 10,
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.Blue[10]
      },
      BottomText: {
        fontSize: 16,
        color: color.Blue[10],
        textAlign: "center",
      }
})

export default BorderBlueButton;