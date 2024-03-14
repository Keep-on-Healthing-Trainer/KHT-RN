import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "../../styles/theme"

const BorderWhiteButton = ({innerText, navigation}) => {

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
      padding: 10,
      width: "40%",
      alignSelf: "center",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: color.Gray[4]
    },
    BottomText: {
      fontSize: 16,
      color: color.Gray[4],
      textAlign: "center",
    }
})

export default BorderWhiteButton;