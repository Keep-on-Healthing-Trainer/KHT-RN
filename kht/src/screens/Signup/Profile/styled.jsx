import { StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.White,
      width: constants.width,
      height: constants.height,
      alignItems: 'center'
    },
    clickImage: {
      backgroundColor: color.Gray[2],
      width: 200,
      height: 200,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: constants.height/10
    },
    text: {
      textAlign: 'center',
      marginTop: constants.height/30,
      fontSize: 14,
      fontFamily: "Roboto_400Regular",
      color: color.Blue[7]
    },
    button: {
      marginTop: constants.height/3
    }
})