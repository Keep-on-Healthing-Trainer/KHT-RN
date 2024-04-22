import React from "react";
import { View, Text, Image } from "react-native";

import constants from "../../../styles/constants";
import { color } from "../../../styles/theme";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

const topRanking = (props) => {
    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
      <View style={Styles.topRankContainer}>
        <View style={Styles.oneContainer}>
          <Text style={Styles.rankText}>2nd</Text>
          <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.anotherProfile}></Image>
          <Text style={Styles.countText}>2000회</Text>
          <Text style={Styles.nameText}>최유준</Text>
        </View>
        <View style={Styles.oneContainer}>
          <Text style={Styles.oneRankText}>1st</Text>
          <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.oneProfile}></Image>
          <Text style={Styles.countText}>3000회</Text>
          <Text style={Styles.nameText}>이나경</Text>
        </View>
        <View style={Styles.oneContainer}>
          <Text style={Styles.rankText}>3rd</Text>
          <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.anotherProfile}></Image>
          <Text style={Styles.countText}>1000회</Text>
          <Text style={Styles.nameText}>최은빈</Text>
        </View>
      </View>
  )
}

const Styles = StyleSheet.create({
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
    }
})

export default topRanking;