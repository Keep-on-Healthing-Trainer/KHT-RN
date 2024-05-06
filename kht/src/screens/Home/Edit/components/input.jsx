import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputCheck from "../../../../components/Inputs/InputCheck";

import { color } from "../../../../styles/theme";
import constants from "../../../../styles/constants";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

const Input = (props) => {
  const name = props.name;
  const data = props.data;

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <View style={Styles.titleContainer}>
        <Text style={Styles.nameTitle}>{name}</Text>
        <InputCheck
        data={data}
        onGetInText={(text) => props.onGetInText(text)}
        />
    </View>
  )
}

const Styles = StyleSheet.create({
    titleContainer: {
      marginTop: constants.height/30,
      marginBottom: constants.height/2
    },
    nameTitle: {
      color: color.Gray[4],
      fontSize: 12,
      marginLeft: constants.width/40,
      fontFamily: "Roboto_400Regular"
    }
})

export default Input;