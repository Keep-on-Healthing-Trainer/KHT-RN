import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Styles as S} from './styled';
import MainHeader from "../../components/header/MainHeader";

const Ranking = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <Text style={S.text}>Ranking 페이지</Text>
    </View>
  )
}

export default Ranking;