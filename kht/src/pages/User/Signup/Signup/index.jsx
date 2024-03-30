import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles as S } from './styled';
import BackPage from "../../../../components/header/BackHeader";
import InputText from "../../../../components/Inputs/Input";
import Button from '../../../../components/Buttons/ColorBlueButton';

const SignupTab = ({navigation, onPress, onSecondPress}) => {

  return (
    <>
      <View style={S.container}>
        <BackPage innerText="회원가입" onPress={onPress}></BackPage>
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
            <InputText name={false}></InputText>
          </View>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>비밀번호 확인</Text>
            <InputText name={false}></InputText>
          </View>
        </View>
        <View style={S.buttonContainer}>
            <Button innerText="회원가입" onPress={onSecondPress}></Button>
        </View>
      </View>
    </>
  )
}

export default SignupTab;