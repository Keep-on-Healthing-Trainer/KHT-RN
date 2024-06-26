import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import InputText from "../../../components/Inputs/InputText";
import Eyes from "../../../assets/icons/Eyes";
import CloseEyes from "../../../assets/icons/CloseEyes";

const Input = (props) => {
  const [passwordType, setPasswordType] = useState(true);
  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
  });

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const handleInputChange = (text, field) => {
    setLoginData(prevData => ({
      ...prevData,
      [field]: text
    }));
  }

  useEffect(() => {
    props.onGetInText(loginData);
  }, [loginData]);

  return (
    <View style={Styles.inputContainer}>
        <InputText
          innerText="아이디를 입력하세요"
          secure={false}
          onGetInText={(text) => handleInputChange(text, "userId")}
        ></InputText>
        <View style={Styles.passwordContainer}>
            <InputText
                innerText="비밀번호를 입력하세요"
                secure={passwordType}
                onGetInText={(text) => handleInputChange(text, "password")}
            ></InputText>
            <TouchableOpacity
              onPress={() => setPasswordType(!passwordType)}
              style={Styles.passwordEyes}
            >
              {passwordType ? (
                  <Eyes></Eyes>
              ) : (
                  <CloseEyes></CloseEyes>
              )}
            </TouchableOpacity>
        </View>
    </View>
  )
}

const Styles = StyleSheet.create({
    inputContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      width: constants.width,
    },
    passwordContainer: {
      flexDirection: 'row',
    },
    passwordEyes: {
      position: 'absolute',
      left: constants.width/1.4,
      top: constants.height/70
    },
    loginStateError: {
      color: color.Red,
      fontSize: 12,
      fontFamily: "Roboto_400Regular",
      width: constants.width/10*8
    }
  })

export default Input;