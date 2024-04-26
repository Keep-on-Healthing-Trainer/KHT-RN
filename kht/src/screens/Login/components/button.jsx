import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import CheckBox from "../../../components/CheckBox";
import ColorBlueButton from "../../../components/Buttons/ColorBlueButton";

const Button = (props) => {
  const { onLoginPress, onSignupPress } = props;
  const [ checkBoxState, setCheckBoxState ] = useState(false);
  
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    props.onGetInState(checkBoxState);
  }, [checkBoxState]);

  return (
    <>
        <CheckBox onGetInPress={(state) => setCheckBoxState(state)}></CheckBox>
        <View style={Styles.buttonContainer}>
          <ColorBlueButton innerText="로그인" onPress={onLoginPress}></ColorBlueButton>
          <View style={Styles.textContainer}>
            <Text style={Styles.textLeft}>계정이 없으신가요?</Text>
            <TouchableOpacity onPress={onSignupPress}>
              <Text style={Styles.textRight}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
    </>
  )
}

const Styles = StyleSheet.create({
    buttonContainer: {
      width: constants.width,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: constants.height/70
    },
    textLeft: {
      color: color.Black,
      fontSize: 12,
      fontFamily: "Roboto_300Light",
      marginRight: constants.width/60
    },
    textRight: {
      color: color.Blue[8],
      fontSize: 12,
      fontFamily: "Roboto_400Regular",
    }
  })

export default Button;