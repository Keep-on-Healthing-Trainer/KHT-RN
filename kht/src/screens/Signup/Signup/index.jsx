import React, { useState } from "react";
import { View, Text } from "react-native";

import { Styles as S } from './styled';
import onSignup from "../../../utils/Signup";

import BackPage from "../../../components/header/BackHeader";
import InputText from "../../../components/Inputs/InputText";
import Button from "../../../components/Buttons/ColorBlueButton";
import Eyes from "../../../assets/icons/Eyes";
import CloseEyes from "../../../assets/icons/CloseEyes";

const SignupTab = ({navigation}) => {
  const [passwordType, setPasswordType] = useState(true);
  const [passwordCheckType, setPasswordCheckType] = useState(true);
  const [passwordState, setPasswordState] = useState(false);
  const [signData, setSignData] = useState({
      userId: "",
      password: "",
      passwordCheck: "",
      userName: "",
      phoneNumber: ""
  });

  const handleInputChange = (text, field) => {
    setSignData(prevData => ({
      ...prevData,
      [field]: text
    }));
  }

  const onPressSignup = () => {
    if(signData.password == signData.passwordCheck) {
      onSignup(signData);
      navigation.navigate("ProfileTab", { screen: 'ProfileTab' });
    }
    else {
      setPasswordState(true);
    }
  }

  return (
    <>
      <View style={S.container}>
        <BackPage innerText="회원가입" onPress={() => navigation.navigate("Login", { screen: 'Login' })}></BackPage>
        <View style={S.inputOutContainer}>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>이름</Text>
            <InputText 
            name={false}
            onGetInText={(text) => handleInputChange(text, "userName")}
            ></InputText>
          </View>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>아이디</Text>
            <InputText
            name={false}
            onGetInText={(text) => handleInputChange(text, "userId")}
            ></InputText>
          </View> 
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>전화번호</Text>
            <InputText
            name={false}
            onGetInText={(text) => handleInputChange(text, "phoneNumber")}
            ></InputText>
          </View>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>비밀번호</Text>
            <InputText
            name={passwordType}
            onGetInText={(text) => handleInputChange(text, "password")}
            ></InputText>
            {passwordType ? (
                <Eyes style={S.passwordEyes} onPress={() => setPasswordType(false)}></Eyes>
              ) : (
                <CloseEyes style={S.passwordEyes} onPress={() => setPasswordType(true)}></CloseEyes>
            )}
          </View>
          <View style={S.inputContainer}>
            <Text style={S.textTitle}>비밀번호 확인</Text>
            <InputText
            name={passwordCheckType}
            onGetInText={(text) => handleInputChange(text, "passwordCheck")}
            ></InputText>
            {passwordCheckType ? (
                <Eyes style={S.passwordEyes} onPress={() => setPasswordCheckType(false)}></Eyes>
              ) : (
                <CloseEyes style={S.passwordEyes} onPress={() => setPasswordCheckType(true)}></CloseEyes>
            )}
            {passwordState ? (
              <Text style={S.passwordCheckError}>비밀번호 확인이 일치하지 않습니다.</Text>
            ) : (
              <></>
            )}
          </View>
        </View>
        <View style={S.buttonContainer}>
            <Button innerText="회원가입" onPress={onPressSignup}></Button>
        </View>
      </View>
    </>
  )
}

export default SignupTab;