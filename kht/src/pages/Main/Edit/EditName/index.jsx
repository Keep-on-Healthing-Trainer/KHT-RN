import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import BackPage from "../../../../components/header/BackHeader";

const EditName = ({navigation, onPress, innerText}) => {

  return (
    <View style={S.container}>
        <BackPage onPress={onPress} innerText={innerText}></BackPage>
    </View>
  )
}

export default EditName;