import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Profile from "../../../assets/icons/Profile";
import BackPage from "../../../components/header/BackHeader";
import Selection from "./components/selection";

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

const SelectTab = ({navigation}) => {
  const [profileLink, setProfileLink] = useState(null);

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
        <BackPage innerText="프로필 편집" onPress={() => navigation.navigate("HomeTab", { screen: 'HomeTab' })}></BackPage>
        <View style={Styles.profileContainer}>
            {profileLink ? (
            <></>
            ) : (
            <Profile style={Styles.profile}></Profile>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("ProfileTab", { screen: 'ProfileTab' })}>
                <Text style={Styles.profileText}>프로필 사진 수정</Text>
            </TouchableOpacity>
        </View>
        <Selection
        onFirstPress={() => navigation.navigate("EditTab", { screen: 'EditTab', name: '사용자 이름' })}
        onSecondPress={() => navigation.navigate("EditTab", { screen: 'EditTab', name: '사용자 아이디' })}
        onThirdPress={() => navigation.navigate("EditTab", { screen: 'EditTab', name: '사용자 전화번호' })}
        />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
    width: constants.width,
    height: constants.height,
    alignItems: 'center'
  },
  profileContainer: {
      alignItems: 'center',
      margin: constants.height/20,
      width: constants.width
  },
  profile: {
      borderRadius: 50,
      width: 100,
      height: 100,
  },
  profileText: {
      color: color.Blue[10],
      fontSize: 14,
      marginTop: constants.height/50,
      fontFamily: "Roboto_400Regular"
  }
})

export default SelectTab;