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
    titleContainer: {
      marginTop: constants.height/30,
      marginBottom: constants.height/2
    },
    nameTitle: {
      color: color.Gray[4],
      fontSize: 12,
      marginLeft: constants.width/40,
      fontFamily: "Roboto_400Regular"
    }
})