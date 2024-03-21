import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles as S } from './styeld';
import MainHeader from "../../components/header/MainHeader";
import MainFooter from "../../components/footer/MainFooter"

const Traning = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <MainFooter innerText="traning"></MainFooter>
    </View>
  )
}

export default Traning;