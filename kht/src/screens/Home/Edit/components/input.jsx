import React, { useState } from "react";
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
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
    
  const {name} = props.innerText;

  const getValue = (onGetInText) => {
    console.log({name} + " : " + onGetInText);
    props.onGetInText(onGetInText);
  }

  return (
    <View style={Styles.titleContainer}>
        <Text style={Styles.nameTitle}>{name}</Text>
        <InputCheck
        innerText="이나경" 
        onGetInText={getValue}
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