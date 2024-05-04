import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WithLocalSvg } from 'react-native-svg';

import MainHeader from "../../../components/header/MainHeader";
import Profile from "../../../assets/icons/Profile";
import Chart from "./LineChart";

import onChart from "../../../utils/fucntion/Chart";
import onUser from "../../../utils/fucntion/User";

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

const HomeTab = ({navigation}) => {
  const [ userData, setUserData ] = useState({});
  const [ data, setData ] = useState({
    "totalCounts": 200,
    "exerciseResponses": [
        {
            id: 0,
            count: 0,
            exerciseDate: "00.00"
        }
    ]
  });

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    onGetUserData();
    onGetChartData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData])

  const onGetUserData = async () => {
    try {
      const user = await onUser();
      setUserData(user);
    } catch (error) {
      console.log("유저 정보 가져오기 오류");
    }
  }

  const onGetChartData = async () => {
    try {
      const chart = await onChart();
      setData(chart);
    } catch (error) {
      console.log("그래프 정보 가져오기 오류");
    }
  }

  return (
    <View style={Styles.container}>
      <MainHeader></MainHeader>
      <View style={Styles.topContainer}>
        <View style={Styles.profileMargin}></View>
        <View style={Styles.profileContainer}>
          <TouchableOpacity style={Styles.editButton} onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}>
            <Text style={Styles.editButtonText}>편집</Text>
          </TouchableOpacity>
          <View style={Styles.nameContanier}>
            <Text style={Styles.IdName}>{userData.name}</Text>
            <Text style={Styles.IdComment}>누적 윗몸말아올리기 횟수 : {data.totalCounts}</Text>
          </View>
        </View>
        {userData.profileImgeUrl ? (
          <WithLocalSvg asset={userData.profileImgeUrl} style={Styles.clickImage}></WithLocalSvg>
        ) : (
          <Profile style={Styles.profile}></Profile>
        )}
      </View>
      <View style={Styles.dataContainer}>
        <Text style={Styles.textCount}>총 {data.totalCounts}회</Text>
        <Text style={Styles.textComment}>KHT와 함께 {data.totalCounts}회 윗몸일으키기를 진행했어요</Text>
        <Chart data={data.exerciseResponses}></Chart>
      </View>
  </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Gray[1],
    width: constants.width,
    height: constants.height,
  },
  topContainer: {
    width: constants.width,
    height: constants.height/4,
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
    height: constants.height/5.5,
    backgroundColor: color.White,
    borderRadius: 20,
    alignItems: 'flex-end',
  },
  dataContainer: {
    width: constants.width,
    height: constants.height/2.5,
    backgroundColor: color.White,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  textCount: {
    color: color.Black,
    fontSize: 20,
    fontFamily: "Roboto_700Bold"
  },
  textComment: {
    color: color.Black,
    fontSize: 12,
    marginBottom: 50,
    fontFamily: "Roboto_400Regular"
  },
  nameContanier: {
    width: constants.width,
    alignItems: 'center'
  },
  IdName: {
    fontSize: 20,
    fontFamily: "Roboto_400Regular",
    color: color.Gray[5],
    marginTop: 10,
    marginBottom: 10
  },
  IdComment: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: color.Gray[4]
  }
})

export default HomeTab;