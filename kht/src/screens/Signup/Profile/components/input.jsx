import React, { useState, useEffect } from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';

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

import ImageSelect from "../../../../assets/icons/ImageSelect";

const Input = (props) => {
  const [ imageUrl, setImageUrl ] = useState(null);
  const [ status, requestPermission ] = ImagePicker.useMediaLibraryPermissions();

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const uploadImage = async () => {
    if(!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1]
    });

    if(result.canceled) {
      return null;
    }

    setImageUrl(result.assets[0].uri);

  };

  useEffect(() => {
    props.onGetInUrl(imageUrl);
  }, [imageUrl]);

  return (
    <>
        {imageUrl ? (
          <Image source={{uri: imageUrl}} style={Styles.clickImage}></Image>
        ) : (
          <Pressable style={Styles.clickImage} onPress={uploadImage}>
            <ImageSelect></ImageSelect>
          </Pressable>
        )}
        <Text style={Styles.text}>프로필을 설정하지 않을{"\n"}경우에는 기본 프로필로 설정됩니다.</Text>
    </>
  )
}

const Styles = StyleSheet.create({
  clickImage: {
    backgroundColor: color.Gray[2],
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: constants.height/10
  },
  text: {
    textAlign: 'center',
    marginTop: constants.height/30,
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: color.Blue[7]
  }
})

export default Input;