import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import MainHeader from "../../../components/header/MainHeader";
import Profile from "../../../assets/icons/Profile";
import Chart from "./LineChart";

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
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const userData = {
		"nickname" : "이름",
		"userId" : "아이디",
		"profileImgeUrl" : null,
		"totalCounts" : 200
  }

  const data = {
    "totalCounts": 200,
    "exerciseResponses": [
      {
            "id": 1,
            "count" : 30,
            "exerciseDate": "04.06"
      },
      {
            "id": 2,
            "count" : 70,
            "exerciseDate": "04.07"
      },
      {
            "id": 3,
            "count" : 100,
            "exerciseDate": "04.08"
      },
      {
          "id": 4,
          "count" : 70,
          "exerciseDate": "04.09"
      },
      {
          "id": 5,
          "count" : 30,
          "exerciseDate": "04.06"
      },
      {
          "id": 6,
          "count" : 70,
          "exerciseDate": "04.07"
      },
      {
          "id": 7,
          "count" : 100,
          "exerciseDate": "04.08"
      },
      {
          "id": 8,
          "count" : 70,
          "exerciseDate": "04.09"
      },
      {
          "id": 9,
          "count" : 70,
          "exerciseDate": "04.09"
      },
      {
          "id": 10,
          "count" : 30,
          "exerciseDate": "04.06"
      },
      {
          "id": 11,
          "count" : 70,
          "exerciseDate": "04.07"
      },
      {
          "id": 12,
          "count" : 100,
          "exerciseDate": "04.08"
      }
    ]
};

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
            <Text style={Styles.IdName}>{userData.nickname}</Text>
            <Text style={Styles.IdComment}>누적 윗몸말아올리기 횟수 : {data.totalCounts}</Text>
          </View>
        </View>
        {userData.profileImgeUrl ? (
          <></>
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