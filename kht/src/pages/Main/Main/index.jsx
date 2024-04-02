import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LineChart } from "react-native-chart-kit";

import {Styles as S} from './styled';
import MainHeader from "../../../components/header/MainHeader";
import Profile from "../../../assets/icons/Profile";
import constants from "../../../styles/constants";

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 11,
};

const data = {
  labels: ["10.21", "10.22", "10.23", "10.27", "10.24", "10.25", "10.26"],
  datasets: [
    {
      data: [20, 30, 40, 35, 50, 45, 65],
      color: (opacity = 0) => `rgba(3, 164, 255, ${opacity})`,
    },
  ]
};

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
        <LineChart
          data={data}
          width={constants.width}
          height={constants.height/4.5}
          chartConfig={chartConfig}
        />
      </View>
  </View>
  )
}

export default MainTab;