import { StyleSheet } from "react-native";
import constants from "../../styles/constants";
import { color } from "../../styles/theme";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.Gray[0],
      width: constants.width,
      height: constants.height,
      justifyContent: 'space-between'
    },
    topRankContainer: {
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
      width: 100,
      height: 100,
      borderRadius: 60
    },
    anotherProfile: {
      width: 70,
      height: 70,
      borderRadius: 50
    },
    oneRankText: {
      color: color.Blue[10],
      fontSize: 30,
      fontFamily: "Roboto_400Regular"
    },
    rankText: {
      color: color.Blue[10],
      fontSize: 22,
      fontFamily: "Roboto_400Regular"
    },
    countText: {
      color: color.Gray[4],
      fontSize: 12,
      fontFamily: "Roboto_400Regular"
    },
    nameText: {
      color: color.Black,
      fontSize: 18,
      fontFamily: "Roboto_400Regular"
    },
    rankingContainer: {
      width: constants.width,
      height: constants.height/2.3,
      alignItems: 'center',
    },
    rankingTableContainer: {
      width: constants.width/1.1,
      height: constants.height/20,
      backgroundColor: color.White,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: constants.width/15,
      paddingRight: constants.width/15,
      marginBottom: 10
    },
    rankingTableProfile: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    rankingTableText: {
      fontSize: 12,
      color: color.Black,
      fontFamily: "Roboto_400Regular"
    },
    myRankingContainer: {
      width: constants.width,
      height: constants.height/10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: color.White,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: color.Black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    myRankingProfile: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    myRankingText: {
      fontSize: 15,
      color: color.Black,
      fontFamily: "Roboto_400Regular"
    },
})