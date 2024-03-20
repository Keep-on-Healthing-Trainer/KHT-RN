import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {Styles as S} from './styled';
import Button from '../../../components/Buttons/ColorBlueButton';
import InputText from '../../../components/Inputs/Input';

const Login = ({navigation}) => {

  return (

    <View style={S.container}>
      <View style={S.backContainer}>
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
          <InputText innerText="아이디" name={false}></InputText>
          <InputText innerText="비밀번호" name={true}></InputText>
        </View>
        <View style={S.buttonContainer}>
          <Button innerText="로그인"
            onPress={() => navigation.navigate("Main", { screen: 'Main' })}
          ></Button>
          <View style={S.textContainer}>
            <Text style={S.textLeft}>계정이 없으신가요?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup", { screen: 'Signup' })}
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