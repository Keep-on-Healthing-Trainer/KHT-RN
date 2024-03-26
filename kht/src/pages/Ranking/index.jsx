import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Styles as S} from './styled';
import MainHeader from "../../components/header/MainHeader";

const Ranking = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <View style={S.rankContainer}>
        <View style={S.oneContainer}>
          <Text style={S.rankText}>2nd</Text>
          <View style={S.anotherProfile}></View>
          <Text style={S.countText}>2000회</Text>
          <Text style={S.nameText}>최유준</Text>
        </View>
        <View style={S.oneContainer}>
          <Text style={S.oneRankText}>1st</Text>
          <View style={S.oneProfile}></View>
          <Text style={S.countText}>3000회</Text>
          <Text style={S.nameText}>이나경</Text>
        </View>
        <View style={S.oneContainer}>
          <Text style={S.rankText}>3rd</Text>
          <View style={S.anotherProfile}></View>
          <Text style={S.countText}>1000회</Text>
          <Text style={S.nameText}>최은빈</Text>
        </View>
      </View>
    </View>
  )
}

export default Ranking;