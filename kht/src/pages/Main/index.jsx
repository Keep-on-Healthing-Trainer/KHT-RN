import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Styles as S} from './styled';
import MainHeader from "../../components/header/MainHeader";

const Signup = ({navigation}) => {

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
    </View>
  )
}

export default Signup;