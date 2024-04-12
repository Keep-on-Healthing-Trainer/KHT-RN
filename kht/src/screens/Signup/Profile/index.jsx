import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import { Styles as S } from './styled';
import onImage from '../../../utils/Image';

import SkipHeader from "../../../components/header/SkipHeader";
import ImageSelect from "../../../assets/icons/ImageSelect";
import Button from "../../../components/Buttons/BorderBlueButton";

const ProfileTab = ({navigation}) => {
  const [ imageUrl, setImageUrl ] = useState(null);
  const [ status, requestPermission ] = ImagePicker.useMediaLibraryPermissions();

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

  const onPressImage = () => {
    onImage(imageUrl);
    navigation.navigate("Login", { screen: 'Login' });
  }

  return (
    <>
      <View style={S.container}>
        <SkipHeader innerText="프로필 사진" onPress={() => {navigation.navigate("MainScreen", { screen: 'MainScreen' })}}></SkipHeader>
        {imageUrl ? (
          <Image source={{uri: imageUrl}} style={S.clickImage}></Image>
        ) : (
          <Pressable style={S.clickImage} onPress={uploadImage}>
            <ImageSelect></ImageSelect>
          </Pressable>
        )}
        <Text style={S.text}>프로필을 설정하지 않을{"\n"}경우에는 기본 프로필로 설정됩니다.</Text>
        <View style={S.button}>
          <Button innerText="저장하기" onPress={onPressImage}></Button>
        </View>
      </View>
    </>
  )
}

export default ProfileTab;