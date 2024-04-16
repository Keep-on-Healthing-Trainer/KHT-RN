import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "../../../styles/theme"
import constants from '../../../styles/constants'
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

const ColorBlueButton = (props) => {
  const innerText = props.innerText;
  const onPress = props.onPress;

  return (
    <TouchableOpacity style={Styles.Bottom} onPress={onPress}>
        <Text style={Styles.BottomText}>{innerText}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
      backgroundColor: color.Blue[8],
      marginTop: "5%",
      width: constants.width/10*8,
      height: constants.height/20,
      alignSelf: "center",
      borderRadius: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    BottomText: {
      fontSize: 16,
      color: color.White,
      textAlign: "center",
      fontFamily: "Roboto_400Regular"
    }
})

export default ColorBlueButton;