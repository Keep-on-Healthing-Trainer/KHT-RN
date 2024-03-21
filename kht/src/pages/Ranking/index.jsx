import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Styles as S} from './styled';
import MainHeader from "../../components/header/MainHeader";
import MainFooter from "../../components/footer/MainFooter"

const Ranking = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <MainFooter innerText="rank"></MainFooter>
    </View>
  )
}

export default Ranking;