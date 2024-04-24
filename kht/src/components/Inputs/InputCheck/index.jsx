import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";

import { color } from "../../../styles/theme";
import constants from '../../../styles/constants';
import Delete from '../../../assets/icons/Delete';
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
  const [text, setText] = useState('');
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    setText(innerText);
  }, []);

  const onChangeText = (innerText) => {
    setText(innerText);
    props.onGetInText(innerText);
  }

  const onDelete = () => {
    setText('');
  }

  return (
    <View> 
      <TextInput
        style={Styles.Bottom}
        onChangeText={onChangeText}
        >{text}</TextInput>
        <TouchableOpacity style={Styles.topItem} onPress={onDelete}>
          <Delete></Delete>
        </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.White,
        marginBottom: "5%",
        width: constants.width/10*8,
        height: 50,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
        color: color.Black,
        borderBottomColor: color.Gray[4],
        borderBottomWidth: 1
    },
    topItem: {
        position: 'absolute',
        width: constants.width/12,
        height: constants.height/40,
        left: constants.width/1.5,
        top: constants.height/50,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})

export default Input;