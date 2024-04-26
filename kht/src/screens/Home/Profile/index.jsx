import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import Center from "./components/center";
import BackHeader from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/BorderBlueButton";
import constants from "../../../styles/constants";
import  { color } from "../../../styles/theme";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

const ProfileTab = ({navigation}) => {
  const [ imageUrl, setImageUrl ] = useState(null);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <>
      <View style={Styles.container}>
        <BackHeader innerText="프로필 사진" onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></BackHeader>
        <Center onGetInUrl={(url) => setImageUrl(url)}/>
        <View style={Styles.button}>
          <Button innerText="수정하기" onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></Button>
          <Button innerText="저장하기" onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></Button>
        </View>
      </View>
    </>
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
  clickImage: {
    backgroundColor: color.Gray[2],
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: constants.height/10
  },
  text: {
    textAlign: 'center',
    marginTop: constants.height/30,
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: color.Blue[7]
  },
  button: {
    marginTop: constants.height/5
  }
})

export default ProfileTab;