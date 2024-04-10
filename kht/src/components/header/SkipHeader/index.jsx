import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import constants from '../../../styles/constants';
import { color } from '../../../styles/theme';

const SkipHeader = (props) => {
  const innerText = props.innerText;
  const onPress = props.onPress;

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.textContainer}>
          <Text style={Styles.text}>{innerText}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
            <Text style={Styles.skipButton}>건너뛰기</Text>
        </TouchableOpacity>
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
        paddingLeft: 70,
        paddingRight: 20,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: color.Black,
      fontSize: 18,
      fontWeight: 'medium',
    },
    skipButton: {
        color: color.Blue[7],
    }
})

export default SkipHeader;