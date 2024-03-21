import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import {Styles as S} from './styled';
import MainHeader from "../../components/header/MainHeader";
import MainFooter from "../../components/footer/MainFooter"

const Main = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <MainFooter innerText="home"></MainFooter>
    </View>
  )
}

export default Main;