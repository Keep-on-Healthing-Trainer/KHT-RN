import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { color } from '../../../styles/theme'
import constants from '../../../styles/constants'
import Arrow from '../../../assets/icons/Arrow'
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';


const BackPage = (props) => {
  const innerText = props.innerText;
  const onPress = props.onPress;
  
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <>
      <View style={Styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Arrow style={Styles.img}></Arrow>
        </TouchableOpacity>
        <View style={Styles.textContainer}>
          <Text style={Styles.text}>{innerText}</Text>
        </View>
      </View>
    </>
  )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: color.White,
        width: constants.width,
        height: constants.height/12,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 40,
    },
    img: {
        width: constants.width/10,
        height: constants.height/10,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: color.Black,
      fontSize: 18,
      fontFamily: "Roboto_500Medium"
    }
})

export default BackPage;