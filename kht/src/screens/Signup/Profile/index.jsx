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
import onImage from '../../../utils/fucntion/Image';
import SkipHeader from "../../../components/header/SkipHeader";
import Button from "../../../components/Buttons/BorderBlueButton";

const ProfileTab = ({navigation, route}) => {
  const [ imageUrl, setImageUrl ] = useState(null);
  const name = route.params.name;

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const onPressImage = async () => {
    try {
      const imageStatus = await onImage(imageUrl, name);
      if (imageStatus) {
        navigation.navigate("Login", { screen: 'Login' });
      }
    } catch (error) {
      console.log("이미지 업로드 오류");
    }
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