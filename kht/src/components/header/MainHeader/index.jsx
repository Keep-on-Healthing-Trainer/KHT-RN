import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import constants from '../../../styles/constants'
import Title from "../../../assets/icons/Title";


const MainHeader = (props) => {
  const innerText = props.innerText;
  const onPress = props.onPress;

  return (
      <View style={Styles.container}>
        <View style={Styles.imgContainer}>
          <Image
              style={Styles.img}
              source={require("../../../assets/images/Logo.png")}
              resizeMode="contain"
          >
          </Image>
        </View>
        <Title></Title>
      </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: constants.height/30
    },
    img: {
      width: constants.width/10,
      height: constants.height/10
    },
    imgContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: constants.width/6.5,
      height: constants.height/10,
      marginRight: constants.width/40,
    },
    text: {
      fontSize: 22,
    }
})

export default MainHeader;