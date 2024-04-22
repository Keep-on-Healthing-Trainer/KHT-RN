import React from "react";
import { View, Text, Image } from "react-native";

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

import MainHeader from "../../components/header/MainHeader";
import topRanking from "./components/topRanking";
import bottomRanking from "./components/bottomRanking";

const Ranking = ({navigation}) => {
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
    <View style={Styles.container}>
      <MainHeader />
      <topRanking />
      <bottomRanking />
      <View style={Styles.myRankingContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.myRankingProfile}></Image>
        <Text style={Styles.myRankingText}>이나경</Text>
        <Text style={Styles.myRankingText}>3회</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Gray[0],
    width: constants.width,
    height: constants.height,
    justifyContent: 'space-between'
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

export default Ranking;