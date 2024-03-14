import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Styles as S} from './styled';

const Login = ({navigation}) => {

  return (
    <View style={S.container}>      
      <Text style={S.HomeText}>로그인 화면</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("Signup", { screen: 'Signup' })}
          style={S.NextBottom}
        >
          <Text style={S.BottomText}>회원가입 화면으로</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login;