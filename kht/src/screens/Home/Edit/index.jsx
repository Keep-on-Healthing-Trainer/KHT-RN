import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import BackPage from "../../../components/header/BackHeader";
import InputCheck from "../../../components/Inputs/InputCheck";

const EditNamTab = ({navigation, name}) => {

  console.log(name);

  return (
    <View style={S.container}>
        <BackPage innerText={name} onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></BackPage>
        <View style={S.titleContainer}>
          <Text style={S.nameTitle}>{name}</Text>
          <InputCheck innerText="이나경"></InputCheck>
        </View>
    </View>
  )
}

export default EditNamTab;