import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import { color } from "../../../styles/theme";
import constants from '../../../styles/constants';
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
  const innerText = props.innerText;
  const name = props.name;

  const [ text, setText ] = useState('');
  
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    props.onGetInText(text);
  }, [text]);

  return (
    <TextInput
    style={Styles.Bottom}
    secureTextEntry={name}
    placeholder={innerText}
    onChangeText={(innerText) => setText(innerText)}
    ></TextInput>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.Gray[1],
        marginBottom: "5%",
        width: constants.width/10*8,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        color: color.Black,
        fontFamily: "Roboto_500Medium"
      }
})

export default Input;