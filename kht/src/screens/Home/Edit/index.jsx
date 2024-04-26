import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackPage from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/BorderBlueButton";
import Input from "./components/input";

const EditNamTab = ({route, navigation}) => {
  const {name} = route.params;
  const [ text, setText ]= useState('');

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <View style={Styles.container}>
        <BackPage innerText={name} onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })} />
        <Input innerText={name} onGetInText={(text) => setText(text)}/>
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