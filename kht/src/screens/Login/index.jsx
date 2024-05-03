import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";

import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import onLogin from "../../utils/fucntion/Login";
import Input from "./components/input";
import Button from "./components/button";

const Login = ({navigation}) => {
  const [ loginData, setLoginData] = useState();
  const [ autoLogin, setAutoLogin ] = useState(false);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  onClickLogin = async () => {
    try {
      const loginState = await onLogin(loginData, autoLogin);
      if (loginState) {
        navigation.navigate("MainScreen", { screen: 'MainScreen' });
      }
    } catch (error) {
      console.log("로그인 오류");
    }
  }

  onClickSignup = () => {
    navigation.navigate("SignupTab", { screen: 'SignupTab' });
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.backContainer}>
        <View style={Styles.logoContainer}>
          <Image
            style={Styles.img}
            source={require("../../assets/images/Logo.png")}
            resizeMode="contain"
          />
          <Text style={Styles.text}>KH TRAINER</Text>
        </View>
        <Input onGetInText={(text) => setLoginData(text)}/>
        <Button
          onGetInState={(state) => setAutoLogin(state)}
          onLoginPress={() => onClickLogin()}
          onSignupPress={() => onClickSignup()}
        />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: constants.width,
    height: constants.height,
    backgroundColor: color.White,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backContainer: {
    width: constants.width,
    height: constants.height/2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: constants.width/5,
    height: constants.height/10
  },
  text: {
    color: color.Blue[8],
    fontSize: 20,
    fontFamily: "Roboto_900Black"
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: constants.width,
  }
})

export default Login;