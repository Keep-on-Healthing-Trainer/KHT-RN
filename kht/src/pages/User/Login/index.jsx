import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import {Styles as S} from './styled';
import Button from '../../../components/Buttons/ColorBlueButton'
import InputText from '../../../components/Inputs/Input'

const Login = ({navigation}) => {

  return (

    <View style={S.container}>
      <View style={S.logoContainer}>
        <Image
          style={S.img}
          source={require("../../../assets/images/Logo.png")}
          resizeMode="contain"
        >
        </Image>
        <Text style={S.text}>KH TRAINER</Text>
      </View>
      <View style={S.inputContainer}>
        <InputText innerText="아이디"></InputText>
        <InputText innerText="비밀번호"></InputText>
      </View>
      <Button innerText="로그인"></Button>
    </View>

  )
}

export default Login;