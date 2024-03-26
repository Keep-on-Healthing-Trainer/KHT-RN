import { StyleSheet } from "react-native";
import constants from '../../styles/constants'
import { color } from '../../styles/theme'

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: constants.width,
      height: constants.height,
    },
    rankContainer: {
      width: constants.width,
      height: constants.height/5,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    oneContainer: {
      width: constants.width/3.5,
      height: constants.height/5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    oneProfile: {
      width: 120,
      height: 120,
      backgroundColor: color.Black,
      borderRadius: 60
    },
    anotherProfile: {
      width: 100,
      height: 100,
      backgroundColor: color.Black,
      borderRadius: 50
    },
    oneRankText: {
      color: color.Blue[10],
      fontSize: 30,
      fontWeight: 'bold'
    },
    rankText: {
      color: color.Blue[10],
      fontSize: 22,
      fontWeight: 'bold'
    },
    countText: {
      color: color.Gray[4],
      fontSize: 12,
    },
    nameText: {
      color: color.Black,
      fontSize: 18,
      fontWeight: 'bold'
    }
})