import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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

const Input = ({navigation}) => {
  const [passwordType, setPasswordType] = useState(true);
  const [passwordCheckType, setPasswordCheckType] = useState(true);
  const [passwordState, setPasswordState] = useState(false);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <View style={Styles.inputOutContainer}>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>이름</Text>
            <InputText 
            name={false}
            ></InputText>
        </View>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>아이디</Text>
            <InputText
            name={false}
            ></InputText>
        </View> 
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>전화번호</Text>
            <InputText
            name={false}
            ></InputText>
        </View>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>비밀번호</Text>
            <InputText
            name={passwordType}
            ></InputText>
            {passwordType ? (
                <Eyes style={Styles.passwordEyes}></Eyes>
              ) : (
                <CloseEyes style={Styles.passwordEyes}></CloseEyes>
            )}
        </View>
        <View style={Styles.inputContainer}>
            <Text style={Styles.textTitle}>비밀번호 확인</Text>
            <InputText
            name={passwordCheckType}
            ></InputText>
            {passwordCheckType ? (
                <Eyes style={Styles.passwordEyes}></Eyes>
              ) : (
                <CloseEyes style={Styles.passwordEyes}></CloseEyes>
            )}
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