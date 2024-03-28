import { StyleSheet } from "react-native";
import constants from '../../../../styles/constants'
import { color } from '../../../../styles/theme'

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
      fontWeight: 'medium',
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
    }
})