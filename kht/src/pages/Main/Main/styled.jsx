import { StyleSheet } from "react-native";
import constants from '../../../styles/constants';
import { color } from '../../../styles/theme';

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.Gray[1],
      width: constants.width,
      height: constants.height,
    },
    topContainer: {
      width: constants.width,
      height: constants.height/3,
      alignItems: 'center',
      position: 'relative',
      marginTop: constants.height/20
    },
    profileMargin: {
      backgroundColor: color.Gray[1],
      width: constants.width,
      height: constants.height/20,
    },
    profile: {
      borderRadius: 50,
      width: 100,
      height: 100,
      position: 'absolute',
    },
    profileContainer: {
      width: constants.width,
      height: constants.height/4,
      backgroundColor: color.White,
      borderRadius: 20,
      alignItems: 'flex-end',
    },
    dataContainer: {
      width: constants.width,
      height: constants.height/3,
      backgroundColor: color.White,
      borderRadius: 20,
    },
    editButton: {
      width: constants.width/8,
      height: constants.height/40,
      borderRadius: 20,
      backgroundColor: color.Gray[3],
      justifyContent: 'center',
      alignItems: 'center',
      margin: constants.width/20
    },
    editButtonText: {
      color: color.White
    }
})