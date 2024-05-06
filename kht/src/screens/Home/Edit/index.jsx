import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackPage from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/BorderBlueButton";
import Input from "./components/input";

const EditNamTab = ({navigation, route}) => {
  const name = route.params.name;
  const type = route.params.type;
  const [ text, setText ]= useState('');

  const onChangeData = () => {
    console.log(text);
    navigation.navigate("SelectTab", { screen: 'SelectTab' })
  };

  return (
    <View style={Styles.container}>
        <BackPage innerText={name} onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })} />
        <Input data={type} name={name} onGetInText={(text) => setText(text)}/>
        <Button innerText="저장하기" onPress={() => onChangeData()} />
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