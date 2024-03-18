import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "../../../styles/theme"

const ColorWhiteButton = ({innerText, navigation}) => {

  return (
    <TouchableOpacity style={Styles.Bottom}>
        <Text style={Styles.BottomText}>{innerText}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
      backgroundColor: color.Blue[1],
      marginTop: "5%",
      width: "70%",
      padding: 10,
      alignSelf: "center",
      borderRadius: 10,
    },
    BottomText: {
      fontSize: 16,
      color: color.Blue[7],
      textAlign: "center",
    }
})

export default ColorWhiteButton;