import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Styles as S} from './styled';

const Signup = ({navigation}) => {

  return (
    <View style={S.container}>      
      <Text style={S.HomeText}>회원가입 화면</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("Rank", { screen: 'Rank' })}
          style={S.NextBottom}
        >
          <Text style={S.BottomText}>랭킹 화면으로</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Signup;