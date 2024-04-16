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
    profileContainer: {
        alignItems: 'center',
        margin: constants.height/20,
        width: constants.width
    },
    profile: {
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    profileText: {
        color: color.Blue[10],
        fontSize: 14,
        marginTop: constants.height/50,
        fontFamily: "Roboto_400Regular"
    },
    nameContainer: {
        width: constants.width/10*8
    },
    nameDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: constants.height/20,
        height: constants.height/30
    },
    nameTagStyle: {
        color: color.Black,
        fontSize: 15,
        fontFamily: "Roboto_400Regular",
        height: constants.height/30,
        width: constants.width/10*3
    },
    nameStyle: {
        color: color.Black,
        fontSize: 15,
        fontFamily: "Roboto_400Regular",
        height: constants.height/30,
        width: constants.width/10*4.5
    },
    nameBox: {
        width: constants.width/10,
        height: constants.height/30
    }
})