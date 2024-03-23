import { StyleSheet } from "react-native";
import constants from '../../styles/constants'
import { color } from "../../styles/theme";

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
      // borderRadius: 20,
    },
    cameraContainer: {
      width: constants.width/10*8,
      height: constants.height/3,
      borderColor: color.Blue[8],
      // borderRadius: 20,
      borderWidth: 5,
    },
    mainContainer: {
      flex: 1,
      backgroundColor: color.Gray[3],
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent: 'space-around',
      paddingBottom: constants.height/15
    },
    textContainer: {
      alignItems: 'center',
    },
    traningTypeText: {
      fontSize: 22,
      fontWeight: 'Black',
      textAlign: 'center',
      color: color.White
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      color: color.White
    },
    button: {
      width: constants.width/10*8,
      height: constants.height/14,
      backgroundColor: color.Blue[8],
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    }
})