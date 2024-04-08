import { StyleSheet } from "react-native";
import constants from "../../../styles/constants";
import { color } from "../../../styles/theme";

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.White,
      width: constants.width,
      height: constants.height,
      alignItems: 'center'
    },
    titleContainer: {
      marginTop: constants.height/30
    },
    nameTitle: {
      color: color.Gray[4],
      fontSize: 12,
      marginLeft: constants.width/40
    }
})