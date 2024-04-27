import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import constants from "../../../../styles/constants";
import { color } from "../../../../styles/theme";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import InputText from "../../../../components/Inputs/InputText";
import Eyes from "../../../../assets/icons/Eyes";
import CloseEyes from "../../../../assets/icons/CloseEyes";

const Input = (props) => {
  const [passwordType, setPasswordType] = useState(true);
  const [passwordCheckType, setPasswordCheckType] = useState(true);
  const [passwordState, setPasswordState] = useState(false);
  const [signupData, setSignupData] = useState({
    userId: "",
    password: "",
    userName: "",
    phoneNumber: "",
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
    setSignupData(prevData => ({
      ...prevData,
      [field]: text
    }));
  }

  useEffect(() => {
    console.log(signupData);
    props.onGetInText(signupData);
  }, [signupData]);

  const onPWCheckError = (text) => {
    if(signupData.password == text) {
      setPasswordState(false);
    }
    else {
      setPasswordState(true);
    }
  }

  return (
    <View style={Styles.inputOutContainer}>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>이름</Text>
            <InputText
            innerText="이름을 입력하세요"
            name={false}
            onGetInText={(text) => handleInputChange(text, "userName")}
            ></InputText>
        </View>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>전화번호</Text>
            <InputText
            innerText="전화번호를 입력하세요 (ex. 01012345678)"
            name={false}
            onGetInText={(text) => handleInputChange(text, "phoneNumber")}
            ></InputText>
        </View>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>아이디</Text>
            <InputText
            innerText="아이디를 입력하세요 (6~15자)"
            name={false}
            onGetInText={(text) => handleInputChange(text, "userId")}
            ></InputText>
        </View> 
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>비밀번호</Text>
            <InputText
            innerText="비밀번호를 입력하세요 (6~20자)"
            name={passwordType}
            onGetInText={(text) => handleInputChange(text, "password")}
            ></InputText>
            <TouchableOpacity
            style={Styles.passwordEyes}
            onPress={() => {setPasswordType(!passwordType)}}
            >
              {passwordType ? (
                  <Eyes></Eyes>
                ) : (
                  <CloseEyes></CloseEyes>
              )}
            </TouchableOpacity>
        </View>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>비밀번호 확인</Text>
            <InputText
            innerText="비밀번호 확인을 입력하세요"
            name={passwordCheckType}
            onGetInText={(text) => onPWCheckError(text)}
            ></InputText>
            <TouchableOpacity
            style={Styles.passwordEyes}
            onPress={() => {setPasswordCheckType(!passwordCheckType)}}
            >
              {passwordCheckType ? (
                  <Eyes></Eyes>
                ) : (
                  <CloseEyes></CloseEyes>
              )}
            </TouchableOpacity>
            {passwordState ? (
              <Text style={Styles.passwordCheckError}>비밀번호 확인이 일치하지 않습니다.</Text>
            ) : (
              <></>
            )}
        </View>
    </View>
  )
}

export const Styles = StyleSheet.create({
    textTitle: {
      backgroundColor: color.White,
      color: color.Black,
      fontSize: 14,
      fontFamily: "Roboto_400Regular",
      marginBottom: constants.height/70
    },
    inputOutContainer: {
      width: constants.width/10*8,
      height: constants.height/1.7,
      marginTop: constants.height/40
    },
    inputContainer: {
      width: constants.width/10*8,
      marginTop: constants.height/80
    },
    buttonContainer: {
      marginTop: constants.height/10
    },
    passwordEyes: {
      position: 'absolute',
      left: constants.width/1.4,
      top: constants.height/22
    },
    passwordCheckError: {
      color: color.Red,
      fontSize: 12,
      fontFamily: "Roboto_400Regular"
    }
})

export default Input;