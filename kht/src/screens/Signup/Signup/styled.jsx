import { StyleSheet } from "react-native";
import constants from "../../../styles/constants";
import { color } from "../../../styles/theme";
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
    textTitle: {
      backgroundColor: color.White,
      color: color.Black,
      fontSize: 14,
      fontFamily: "Roboto_400Regular",
      marginBottom: constants.height/70
    },
    inputOutContainer: {
      width: constants.width/10*8,
      height: constants.height/1.7,
      marginTop: constants.height/40
    },
    inputContainer: {
      width: constants.width/10*8,
      marginTop: constants.height/80
    },
    buttonContainer: {
      marginTop: constants.height/10
    },
    passwordEyes: {
      position: 'absolute',
      left: constants.width/1.4,
      top: constants.height/22
    },
    passwordCheckError: {
      color: color.Red,
      fontSize: 12,
      fontFamily: "Roboto_400Regular"
    }
})