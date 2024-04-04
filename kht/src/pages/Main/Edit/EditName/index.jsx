import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import BackPage from "../../../../components/header/BackHeader";
import InputCheck from "../../../../components/Inputs/InputCheck";

const EditName = ({navigation, onPress, innerText}) => {

  return (
    <View style={S.container}>
        <BackPage onPress={onPress} innerText={innerText}></BackPage>
        <View style={S.titleContainer}>
          <Text style={S.nameTitle}>{innerText}</Text>
          <InputCheck innerText="이나경"></InputCheck>
        </View>
    </View>
  )
}

export default EditName;