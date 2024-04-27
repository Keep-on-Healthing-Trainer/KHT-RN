import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import BackPage from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/BorderBlueButton";
import Input from "./components/input";

const EditNamTab = ({route, navigation}) => {
  const { name } = route.params;
  const [ text, setText ]= useState('');

  const userData = {
		"nickname" : "이름",
		"userId" : "아이디",
		"profileImgeUrl" : null,
		"totalCounts" : 200,
    "phoneNumber" : "01055558888"
  }

  return (
    <View style={Styles.container}>
        <BackPage innerText={name} onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })} />
        <Input data={name=="사용자 이름" ? userData.nickname : (name=="사용자 아이디" ? userData.userId : userData.phoneNumber)} innerText={name} onGetInText={(text) => setText(text)}/>
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