import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import MainHeader from "../../../components/header/MainHeader";
import Profile from "../../../assets/icons/Profile";
import Chart from "../LineChart";

const MainTab = ({navigation, onPress}) => {
  const [profileLink, setProfileLink] = useState(null);

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <View style={S.topContainer}>
        <View style={S.profileMargin}></View>
        <View style={S.profileContainer}>
          <TouchableOpacity style={S.editButton} onPress={onPress}>
            <Text style={S.editButtonText}>편집</Text>
          </TouchableOpacity>
          <View style={S.nameContanier}>
            <Text style={S.IdName}>이나경</Text>
            <Text style={S.IdComment}>누적 윗몸말아올리기 횟수 : 1003</Text>
          </View>
        </View>
        {profileLink ? (
          <></>
        ) : (
          <Profile style={S.profile}></Profile>
        )}
      </View>
      <View style={S.dataContainer}>
        <Text style={S.textCount}>총 1003회</Text>
        <Text style={S.textComment}>KHT와 함께 1003회 윗몸일으키기를 진행했어요</Text>
        <Chart></Chart>
      </View>
  </View>
  )
}

export default MainTab;