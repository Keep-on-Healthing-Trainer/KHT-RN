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
        marginTop: constants.height/50
    },
    nameContainer: {
        width: constants.width,
    },
    nameDiv: {
        flexDirection: 'row',
        marginLeft: constants.width/7,
        marginBottom: constants.height/20
    },
    nameTagStyle: {
        color: color.Black,
        fontSize: 15,
        width: constants.width/4
    },
    nameStyle: {
        color: color.Black,
        fontSize: 15,
        fontWeight: '600'
    }
})