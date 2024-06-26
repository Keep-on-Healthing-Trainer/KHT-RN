import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Check from "../../assets/icons/Check";
import { color } from "../../styles/theme";
import constants from '../../styles/constants';
import {
    useFonts,
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  } from '@expo-google-fonts/roboto';

const CheckBox = (props) => {
  const [loginSelect, setLoginSelect] = useState(false);
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    props.onGetInPress(loginSelect);
  }, [loginSelect]);

  return (
    <TouchableOpacity style={Styles.Bottom} onPress={() => setLoginSelect(!loginSelect)}>
        {loginSelect ? (
          <Check></Check>
        ) : (
          <View style={Styles.checkbox}></View>
        )}
        <Text style={Styles.text}>자동 로그인</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        width: constants.width/10*8,
        height: constants.height/40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: color.Gray[8]
    },
    text: {
        marginLeft: 10,
        fontSize: 14,
        color: color.Gray[8],
        fontFamily: "Roboto_500Medium"
    }
})

export default CheckBox;