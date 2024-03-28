import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles as S } from './styled';
import BackPage from "../../../../components/header/BackHeader";

const ProfileTab = ({navigation, onPress}) => {

  return (
    <>
      <View style={S.container}>
        <BackPage innerText="프로필 사진" onPress={onPress}></BackPage>
      </View>
    </>
  )
}

export default ProfileTab;