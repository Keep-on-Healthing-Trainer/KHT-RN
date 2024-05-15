import React, { useState, useEffect } from "react";
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

import onUser from "../../utils/fucntion/User";
import onRanking from "../../utils/fucntion/Ranking";

const Ranking = ({navigation}) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ userData, setUserData ]= useState(null);

  useEffect(() => {
    setIsLoading(false);
    onGetUserData();
    onGetRanking();
  }, []);

  useEffect(() => {
    if(data !== null) {
      setIsLoading(true);
      console.log(userData);
      console.log(data);
    }
  }, [data]);

  const onGetUserData = async () => {
    try {
      const user = await onUser();
      setUserData(user);
    } catch (error) {
      console.log("유저 정보 가져오기 오류");
    }
  }

  const onGetRanking = async () => {
    try {
      const rank = await onRanking();
      setData(rank);
    } catch (error) {
      console.log("랭킹 정보 가져오기 오류");
    }
  }

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
      {isLoading ? (
          <View style={Styles.rankingContainer}>
            <TopRanking data={data} />
            <BottomRanking data={data} />
          </View>
      ) : (
        <View style={Styles.rankingContainer}></View>
      )}
      <View style={Styles.myRankingContainer}>
        <Image source={userData ? {uri: userData.profileImgeUrl} : require('../../assets/images/ProfileImage.png')} style={Styles.myRankingProfile}></Image>
        <Text style={Styles.myRankingText}>{isLoading ? userData.name : undefined}</Text>
        <Text style={Styles.myRankingText}>{isLoading ? userData.totalCounts : undefined}회</Text>
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
  rankingContainer: {
    width: constants.width,
    height: constants.height/5 + constants.height/2.3
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