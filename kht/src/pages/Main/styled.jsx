import { StyleSheet } from "react-native";
import constants from '../../styles/constants'

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: constants.width,
      height: constants.height,
      justifyContent: 'space-between'
    },
    text: {
      fontSize: 50
    }
})