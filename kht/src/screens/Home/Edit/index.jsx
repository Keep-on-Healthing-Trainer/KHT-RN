import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackPage from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/BorderBlueButton";
import Input from "./components/input";

const EditNamTab = ({route, navigation}) => {
  const {name} = route.params;

  return (
    <View style={Styles.container}>
        <BackPage innerText={name} onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })} />
        <Input />
        <Button innerText="저장하기" onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })} />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
    width: constants.width,
    height: constants.height,
    alignItems: 'center'
  }
})

export default EditNamTab;