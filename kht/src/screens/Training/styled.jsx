import { StyleSheet } from "react-native";
import constants from "../../styles/constants";
import { color } from "../../styles/theme";

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.White,
      width: constants.width,
      height: constants.height,
    },
    text: {
      fontSize: 18,
      marginTop: 20,
      textAlign: 'center',
    },
    camera: {
      flex: 1,
    },
    cameraContainer: {
      width: constants.width/10*7.8,
      height: constants.height/3.2,
      borderColor: color.Blue[8],
      borderRadius: 30,
      borderWidth: 5
    },
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent: 'space-evenly',
      paddingTop: constants.height/30,
      paddingBottom: constants.height/30
    },
    traningTypeText: {
      fontSize: 22,
      textAlign: 'center',
      color: color.White,
      marginBottom: constants.height/80
    },
    noCheckText: {
      fontSize: 20,
      color: color.Black
    }
})