import React from "react";
import { View, Text } from "react-native";
import {Styles as S} from './styled';

const Info = ({navigation}) => {

  return (
    <View style={S.container}>      
      <Text style={S.HomeText}>마이페이지 화면</Text>
    </View>
  )
}

export default Info;