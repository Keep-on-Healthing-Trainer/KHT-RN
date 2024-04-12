import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import onLogin from '../../utils/Login';
import CheckBox from "../../components/CheckBox";

import Button from "../../components/Buttons/ColorBlueButton";
import InputText from "../../components/Inputs/InputText";
import Eyes from "../../assets/icons/Eyes";
import CloseEyes from "../../assets/icons/CloseEyes";

const Login = ({navigation}) => {
  const [passwordType, setPasswordType] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
  });

  const handleInputChange = (text, field) => {
    setLoginData(prevData => ({
      ...prevData,
      [field]: text
    }));
  }

  const onPressLogin = () => {
    onLogin(loginData, loginCheck);
    navigation.navigate("MainScreen", { screen: 'MainScreen' });
  }

  const onGetPress = (onGetInPress) => {
    setLoginCheck(onGetInPress);
  }

  return (

    <View style={S.container}>
      <View style={S.backContainer}>
        <View style={S.logoContainer}>
          <Image
            style={S.img}
            source={require("../../assets/images/Logo.png")}
            resizeMode="contain"
          >
          </Image>
          <Text style={S.text}>KH TRAINER</Text>
        </View>
        <View style={S.inputContainer}>
          <InputText
          innerText="아이디"
          name={false}
          onGetInText={(text) => handleInputChange(text, "userId")}
          ></InputText>
          <View style={S.passwordContainer}>
            <InputText
            innerText="비밀번호"
            name={passwordType}
            onGetInText={(text) => handleInputChange(text, "password")}
            ></InputText>
            {passwordType ? (
                <Eyes style={S.passwordEyes} onPress={() => setPasswordType(false)}></Eyes>
              ) : (
                <CloseEyes style={S.passwordEyes} onPress={() => setPasswordType(true)}></CloseEyes>
            )}
          </View>
          {loginState ? (
            <Text style={S.loginStateError}>아이디 또는 비밀번호가 일치하지 않습니다.</Text>
          ) : (
            <></>
          )}
        </View>
        <CheckBox onGetInPress={onGetPress}></CheckBox>
        <View style={S.buttonContainer}>
          <Button innerText="로그인"
            onPress={onPressLogin}
          ></Button>
          <View style={S.textContainer}>
            <Text style={S.textLeft}>계정이 없으신가요?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignupTab", { screen: 'SignupTab' })}
            >
              <Text style={S.textRight}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  )
}

export default Login;