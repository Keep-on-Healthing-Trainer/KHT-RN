import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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

const Input = ({navigation}) => {
  const [passwordType, setPasswordType] = useState(false);
  const [loginState, setLoginState] = useState(false);
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
    <View style={Styles.inputContainer}>
        <InputText
          innerText="아이디"
          name={false}
        ></InputText>
        <View style={Styles.passwordContainer}>
            <InputText
                innerText="비밀번호"
                name={passwordType}
            ></InputText>
            {passwordType ? (
                <Eyes style={Styles.passwordEyes}></Eyes>
            ) : (
                <CloseEyes style={Styles.passwordEyes}></CloseEyes>
            )}
        </View>
        {loginState ? (
            <Text style={Styles.loginStateError}>아이디 또는 비밀번호가 일치하지 않습니다.</Text>
        ) : (
            <></>
        )}
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