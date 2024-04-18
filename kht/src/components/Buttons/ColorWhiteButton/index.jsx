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

const ColorWhiteButton = (props) => {
  const innerText = props.innerText;
  const onPress = props.onPress;
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <TouchableOpacity style={Styles.Bottom} onPress={onPress}>
        <Text style={Styles.BottomText}>{innerText}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
      backgroundColor: color.Blue[1],
      marginTop: "5%",
      width: constants.width/10*8,
      alignSelf: "center",
      borderRadius: 10,
      padding: 10,
    },
    BottomText: {
      fontSize: 16,
      color: color.Blue[7],
      textAlign: "center",
      fontFamily: "Roboto_500Medium"
    }
})

export default ColorWhiteButton;