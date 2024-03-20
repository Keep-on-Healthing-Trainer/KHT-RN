import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { color } from '../../../styles/theme'
import constants from '../../../styles/constants'
import Arrow from '../../../assets/icons/Arrow'

const BackPage = ({innerText, navigation, onPress}) => {

  return (
    <>
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.buttonContainer} onPress={onPress}>
          <Arrow style={Styles.img}></Arrow>
        </TouchableOpacity>
        <Text style={Styles.text}>{innerText}</Text>
      </View>
    </>
  )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: color.White,
        width: constants.width,
        height: constants.height/12,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    img: {
        width: constants.width/10,
        height: constants.height/10,
    },
    buttonContainer: {
      paddingLeft: constants.width/20,
      paddingRight: constants.width/55
    },
    text: {
      color: color.Black,
      fontSize: 18,
      fontWeight: 'medium',
      marginLeft: constants.width/3.3
    }
})

export default BackPage;