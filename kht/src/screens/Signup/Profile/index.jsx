import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

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

import Input from "./components/input";
import onImage from '../../../utils/Image';
import SkipHeader from "../../../components/header/SkipHeader";
import Button from "../../../components/Buttons/BorderBlueButton";

const ProfileTab = ({navigation}) => {
  const [ imageUrl, setImageUrl ] = useState(null);
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const onPressImage = () => {
    onImage(imageUrl);
    navigation.navigate("Login", { screen: 'Login' });
  }

  return (
    <>
      <View style={Styles.container}>
        <SkipHeader innerText="프로필 사진" onPress={() => {navigation.navigate("Login", { screen: 'Login' })}} />
        <Input onGetInUrl={(url) => setImageUrl(url)}/>
        <View style={Styles.button}>
          <Button innerText="저장하기" onPress={onPressImage} />
        </View>
      </View>
    </>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
    width: constants.width,
    height: constants.height,
    alignItems: 'center'
  },
  button: {
    marginTop: constants.height/3
  }
})

export default ProfileTab;