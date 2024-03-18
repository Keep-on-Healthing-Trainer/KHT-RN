import { StyleSheet } from "react-native";
import constants from '../../../styles/constants'

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: constants.width,
      height: constants.height
    },
    HomeText: {
      fontSize: 30,
      textAlign: "center",
    },
    NextBottom: {
      backgroundColor: "purple",
      padding: 10,
      marginTop: "20%",
      width: "50%",
      alignSelf: "center",
      borderRadius: 10,
    },
    BottomText: {
      fontSize: 15,
      color: 'white',
      textAlign: "center",
    }
  })