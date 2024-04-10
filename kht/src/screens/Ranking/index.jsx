import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import MainHeader from "../../components/header/MainHeader";

const Ranking = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <View style={S.topRankContainer}>
        <View style={S.oneContainer}>
          <Text style={S.rankText}>2nd</Text>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.anotherProfile}></Image>
          <Text style={S.countText}>2000회</Text>
          <Text style={S.nameText}>최유준</Text>
        </View>
        <View style={S.oneContainer}>
          <Text style={S.oneRankText}>1st</Text>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.oneProfile}></Image>
          <Text style={S.countText}>3000회</Text>
          <Text style={S.nameText}>이나경</Text>
        </View>
        <View style={S.oneContainer}>
          <Text style={S.rankText}>3rd</Text>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.anotherProfile}></Image>
          <Text style={S.countText}>1000회</Text>
          <Text style={S.nameText}>최은빈</Text>
        </View>
      </View>
      <View style={S.rankingContainer}>
        <View style={S.rankingTableContainer}>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.rankingTableProfile}></Image>
          <Text style={S.rankingTableText}>제갈집집</Text>
          <Text style={S.rankingTableText}>800회</Text>
        </View>
        <View style={S.rankingTableContainer}>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.rankingTableProfile}></Image>
          <Text style={S.rankingTableText}>제갈집집</Text>
          <Text style={S.rankingTableText}>800회</Text>
        </View>
        <View style={S.rankingTableContainer}>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.rankingTableProfile}></Image>
          <Text style={S.rankingTableText}>제갈집집</Text>
          <Text style={S.rankingTableText}>800회</Text>
        </View>
        <View style={S.rankingTableContainer}>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.rankingTableProfile}></Image>
          <Text style={S.rankingTableText}>제갈집집</Text>
          <Text style={S.rankingTableText}>800회</Text>
        </View>
        <View style={S.rankingTableContainer}>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.rankingTableProfile}></Image>
          <Text style={S.rankingTableText}>제갈집집</Text>
          <Text style={S.rankingTableText}>800회</Text>
        </View>
        <View style={S.rankingTableContainer}>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.rankingTableProfile}></Image>
          <Text style={S.rankingTableText}>제갈집집</Text>
          <Text style={S.rankingTableText}>800회</Text>
        </View>
        <View style={S.rankingTableContainer}>
          <Image source={require('../../assets/images/ProfileImage.png')} style={S.rankingTableProfile}></Image>
          <Text style={S.rankingTableText}>제갈집집</Text>
          <Text style={S.rankingTableText}>800회</Text>
        </View>
      </View>
      <View style={S.myRankingContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={S.myRankingProfile}></Image>
        <Text style={S.myRankingText}>이나경</Text>
        <Text style={S.myRankingText}>3회</Text>
      </View>
    </View>
  )
}

export default Ranking;