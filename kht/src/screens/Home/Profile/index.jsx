import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import { Styles as S } from './styled';
import BackHeader from "../../../components/header/BackHeader";
import Button from "../../../components/Buttons/BorderBlueButton";

const ProfileTab = ({navigation}) => {
  const [ imageUrl, setImageUrl ] = useState('');
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

  return (
    <>
      <View style={S.container}>
        <BackHeader innerText="프로필 사진" onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></BackHeader>
        {imageUrl ? (
          <Image source={{uri: imageUrl}} style={S.clickImage}></Image>
        ) : (
          <Image source={require('../../../assets/images/ProfileImage.png')} style={S.clickImage}></Image>
        )}
        <Text style={S.text}>프로필 이미지를 설정하지 않을{"\n"}경우에는 기본 프로필로 설정됩니다.</Text>
        <View style={S.button}>
          <Button innerText="수정하기" onPress={uploadImage}></Button>
          <Button innerText="저장하기" onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></Button>
        </View>
      </View>
    </>
  )
}

export default ProfileTab;