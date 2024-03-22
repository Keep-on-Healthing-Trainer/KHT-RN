import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles as S } from './styeld';
import MainHeader from "../../components/header/MainHeader";

const Traning = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <Text style={S.text}>Traning 페이지</Text>
    </View>
  )
}

export default Traning;