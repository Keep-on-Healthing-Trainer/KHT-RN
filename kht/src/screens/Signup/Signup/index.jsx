import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

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

import Input from "./components/input";
import BackPage from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/ColorBlueButton";

const SignupTab = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={Styles.container}>
      <BackPage innerText="회원가입" onPress={() => navigation.navigate("Login", { screen: 'Login' })} />
      <Input />
      <View style={Styles.buttonContainer}>
        <Button innerText="회원가입" onPress={() => navigation.navigate("ProfileTab", { screen: 'ProfileTab' })} />
      </View>
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
  buttonContainer: {
    marginTop: constants.height/10
  }
})

export default SignupTab;