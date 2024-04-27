import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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
import TopRanking from "./components/topRanking";
import BottomRanking from "./components/bottomRanking";

const Ranking = ({navigation}) => {
  const userData = {
		"nickname" : "이름",
		"userId" : "아이디",
		"profileImgeUrl" : null,
		"totalCounts" : 200,
    "phoneNumber" : "01055558888"
  }
  const data = {
    "RankingResponse": [
        {
            "userName" : "이름",
            "totalCounts" : "7000",
            "profileImgeUrl" : null
        },
        {
            "userName" : "이름",
            "totalCounts" : "6000",
            "profileImgeUrl" : null
        },
        {
            "userName" : "이름",
            "totalCounts" : "5000",
            "profileImgeUrl" : null
        }, 
        {
            "userName" : "이름",
            "totalCounts" : "4000",
            "profileImgeUrl" : null
        }, 
	      {
            "userName" : "이름",
            "totalCounts" : "4000",
            "profileImgeUrl" : null
        }, 
        {
            "userName" : "이름",
            "totalCounts" : "3000",
            "profileImgeUrl" : null
        }, 
        {
            "userName" : "이름",
            "totalCounts" : "2000",
            "profileImgeUrl" : null
        }, 
        {
            "userName" : "이름",
            "totalCounts" : "1000",
            "profileImgeUrl" : null
        }, 
        {
            "userName" : "이름",
            "totalCounts" : "500",
            "profileImgeUrl" : null
        }, 
        {
            "userName" : "이름",
            "totalCounts" : "100",
            "profileImgeUrl" : null
        }
    ]
};

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <View style={Styles.container}>
      <MainHeader />
      <TopRanking data={data.RankingResponse} />
      <BottomRanking data={data.RankingResponse} />
      <View style={Styles.myRankingContainer}>
        <Image source={userData.profileImgeUrl ? undefined : require('../../assets/images/ProfileImage.png')} style={Styles.myRankingProfile}></Image>
        <Text style={Styles.myRankingText}>{userData.nickname}</Text>
        <Text style={Styles.myRankingText}>{userData.totalCounts}</Text>
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
    height: constants.height/12,
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