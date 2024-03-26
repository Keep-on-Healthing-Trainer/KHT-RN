import { StyleSheet } from "react-native";
import constants from '../../../styles/constants';
import { color } from '../../../styles/theme';

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
        marginTop: constants.height/20
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
    }
})