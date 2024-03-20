import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { color } from '../../../styles/theme'
import constants from '../../../styles/constants'


const MainHeader = ({innerText, navigation, onPress}) => {

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.imgContainer}>
          <Image
              style={Styles.img}
              source={require("../../../assets/images/Logo.png")}
              resizeMode="contain"
          >
          </Image>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
            <Text style={Styles.text}>KHT</Text>
          </LinearGradient>
        </View>
      </View>
    </>
  )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: color.Black,
        width: constants.width,
        height: constants.height/10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
      width: constants.width/8,
      height: constants.height/10
    },
    imgContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: constants.width/2.5,
      height: constants.height/10,
      backgroundColor: color.Blue[1],
      flexDirection: 'row',
    },
    text: {
      fontSize: 22,
      fontWeight: 'black'
    }
})

export default MainHeader;