import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";

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
import onSignup from "../../../utils/fucntion/Signup";
import Input from "./components/input";
import BackPage from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/ColorBlueButton";

const SignupTab = ({navigation}) => {
  const [signupData, setSignupData] = useState();
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  onClickSignup = async () => {
    if(signupData.name.length >= 2 && signupData.name.length <= 8) {
      if(signupData.userId.length >= 6 && signupData.userId.length <= 15) {
        if(signupData.phoneNumber.length == 11) {
          if(signupData.password.length >= 8 && signupData.password.length <= 20) {
              try {
                const signupState = await onSignup(signupData);
                if (signupState) {
                  navigation.navigate("ProfileTab", { screen: 'ProfileTab', name: signupData.userId });
                }
              } catch (error) {
                console.log("회원가입 오류");
              }
          } else {
            Alert.alert('비밀번호는 8~20자 사이여야 합니다.');
          }
        } else {
          Alert.alert('전화번호는 11자여야 합니다.');
        }
      } else {
        Alert.alert('아이디는 6~15자 사이여야 합니다.');
      }
    } else {
      Alert.alert('이름은 2~8자 사이여야 합니다.');
    }
  }

  return (
    <View style={Styles.container}>
      <BackPage innerText="회원가입" onPress={() => navigation.navigate("Login", { screen: 'Login' })} />
      <Input onGetInText={(text) => setSignupData(text)}/>
      <View style={Styles.buttonContainer}>
        <Button innerText="회원가입" onPress={() => onClickSignup()} />
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