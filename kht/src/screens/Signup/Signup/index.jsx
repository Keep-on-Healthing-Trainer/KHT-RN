import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Styles as S } from './styled';
import BackPage from "../../../components/header/BackHeader";
import InputText from "../../../components/Inputs/InputText";
import Button from "../../../components/Buttons/ColorBlueButton";
import Eyes from "../../../assets/icons/Eyes";
import CloseEyes from "../../../assets/icons/CloseEyes";

const SignupTab = ({navigation}) => {
  const [passwordType, setPasswordType] = useState(true);
  const [passwordCheckType, setPasswordCheckType] = useState(true);

  return (
    <>
      <View style={S.container}>
        <BackPage innerText="회원가입" onPress={() => navigation.navigate("Login", { screen: 'Login' })}></BackPage>
        <View style={S.inputOutContainer}>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>이름</Text>
            <InputText name={false}></InputText>
          </View>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>아이디</Text>
            <InputText name={false}></InputText>
          </View> 
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>전화번호</Text>
            <InputText name={false}></InputText>
          </View>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>비밀번호</Text>
            <InputText name={passwordType}></InputText>
            {passwordType ? (
                <Eyes style={S.passwordEyes} onPress={() => setPasswordType(false)}></Eyes>
              ) : (
                <CloseEyes style={S.passwordEyes} onPress={() => setPasswordType(true)}></CloseEyes>
            )}
          </View>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>비밀번호 확인</Text>
            <InputText name={passwordCheckType}></InputText>
            {passwordCheckType ? (
                <Eyes style={S.passwordEyes} onPress={() => setPasswordCheckType(false)}></Eyes>
              ) : (
                <CloseEyes style={S.passwordEyes} onPress={() => setPasswordCheckType(true)}></CloseEyes>
            )}
          </View>
        </View>
        <View style={S.buttonContainer}>
            <Button innerText="회원가입" onPress={() => navigation.navigate("ProfileTab", { screen: 'ProfileTab' })}></Button>
        </View>
      </View>
    </>
  )
}

export default SignupTab;