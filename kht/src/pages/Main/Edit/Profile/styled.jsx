import { StyleSheet } from "react-native";
import constants from '../../../../styles/constants';
import { color } from '../../../../styles/theme';

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
      fontWeight: '600',
      color: color.Blue[7]
    },
    button: {
      marginTop: constants.height/4
    }
})