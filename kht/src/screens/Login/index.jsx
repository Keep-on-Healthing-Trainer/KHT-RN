import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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

import onLogin from "../../utils/Login";
import Input from "./components/input";
import Button from "./components/button";

const Login = ({navigation}) => {
  const [loginData, setLoginData] = useState();
  const [ autoLogin, setAutoLogin ] = useState(false);
  const [loginState, setLoginState] = useState();

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  onClickLogin = () => {
    onLogin(loginData);
    if(autoLogin) {
      console.log('autoLogin이 켜져있습니다.');
    }
    navigation.navigate("MainScreen", { screen: 'MainScreen' });
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
        <Input onGetInText={(text) => setLoginData(text)} name={loginState}/>
        <Button
          onGetInState={(state) => console.log(state)}
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