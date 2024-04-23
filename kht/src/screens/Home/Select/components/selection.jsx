import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ProfileArrow from "../../../../assets/icons/ProfileArrow";
import constants from "../../../../styles/constants";
import { color } from "../../../../styles/theme";
import {
    useFonts,
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  } from '@expo-google-fonts/roboto';

const Selection = (props) => {
  console.log(props.onFirstPress);
  const [profileLink, setProfileLink] = useState(null);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
        <View style={Styles.nameContainer}>
          <View style={Styles.nameDiv}>
            <Text style={Styles.nameTagStyle}>이름</Text>
            <Text style={Styles.nameStyle}>이나경</Text>
            <TouchableOpacity
            style={Styles.nameBox}
            onPress={props.onFirstPress}
            >
              <ProfileArrow></ProfileArrow>
            </TouchableOpacity>
          </View>
          <View style={Styles.nameDiv}>
            <Text style={Styles.nameTagStyle}>아이디</Text>
            <Text style={Styles.nameStyle}>mosh</Text>
            <TouchableOpacity
            style={Styles.nameBox}
            onPress={props.onSecondPress}
            >
              <ProfileArrow></ProfileArrow>
            </TouchableOpacity>
          </View>
          <View style={Styles.nameDiv}>
            <Text style={Styles.nameTagStyle}>전화번호</Text>
            <Text style={Styles.nameStyle}>01055558888</Text>
            <TouchableOpacity
            style={Styles.nameBox}
            onPress={props.onThirdPress}
            >
              <ProfileArrow></ProfileArrow>
            </TouchableOpacity>
          </View>
        </View>
  )
}

const Styles = StyleSheet.create({
    nameContainer: {
        width: constants.width/10*8
    },
    nameDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: constants.height/20,
        height: constants.height/30
    },
    nameTagStyle: {
        color: color.Black,
        fontSize: 15,
        fontFamily: "Roboto_400Regular",
        height: constants.height/30,
        width: constants.width/10*3
    },
    nameStyle: {
        color: color.Black,
        fontSize: 15,
        fontFamily: "Roboto_400Regular",
        height: constants.height/30,
        width: constants.width/10*4.5
    },
    nameBox: {
        width: constants.width/10,
        height: constants.height/30
    }
})

export default Selection;