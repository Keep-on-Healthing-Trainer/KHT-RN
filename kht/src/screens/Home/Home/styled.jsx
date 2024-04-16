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
      backgroundColor: color.Gray[1],
      width: constants.width,
      height: constants.height,
    },
    topContainer: {
      width: constants.width,
      height: constants.height/4,
      alignItems: 'center',
      position: 'relative',
      marginTop: constants.height/20
    },
    profileMargin: {
      backgroundColor: color.Gray[1],
      width: constants.width,
      height: constants.height/20,
    },
    profile: {
      borderRadius: 50,
      width: 100,
      height: 100,
      position: 'absolute',
    },
    profileContainer: {
      width: constants.width,
      height: constants.height/5.5,
      backgroundColor: color.White,
      borderRadius: 20,
      alignItems: 'flex-end',
    },
    dataContainer: {
      width: constants.width,
      height: constants.height/2.5,
      backgroundColor: color.White,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    editButton: {
      width: constants.width/8,
      height: constants.height/40,
      borderRadius: 20,
      backgroundColor: color.Gray[3],
      justifyContent: 'center',
      alignItems: 'center',
      margin: constants.width/20
    },
    editButtonText: {
      color: color.White
    },
    textCount: {
      color: color.Black,
      fontSize: 20,
      fontFamily: "Roboto_400Regular"
    },
    textComment: {
      color: color.Black,
      fontSize: 12,
      marginBottom: 50,
      fontFamily: "Roboto_400Regular"
    },
    nameContanier: {
      width: constants.width,
      alignItems: 'center'
    },
    IdName: {
      fontSize: 20,
      fontFamily: "Roboto_400Regular",
      color: color.Gray[5],
      marginBottom: 10
    },
    IdComment: {
      fontSize: 14,
      fontFamily: "Roboto_400Regular",
      color: color.Gray[4]
    }
})