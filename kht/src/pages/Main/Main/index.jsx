import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import MainHeader from "../../../components/header/MainHeader";
import Profile from "../../../assets/icons/Profile";

const MainTab = ({navigation, onPress}) => {
  const [profileLink, setProfileLink] = useState(null);
  const [editState, setEditState] = useState(false);

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <View style={S.topContainer}>
        <View style={S.profileMargin}></View>
        <View style={S.profileContainer}>
          <TouchableOpacity style={S.editButton} onPress={onPress}>
            <Text style={S.editButtonText}>편집</Text>
          </TouchableOpacity>
        </View>
        {profileLink ? (
          <></>
        ) : (
          <Profile style={S.profile}></Profile>
        )}
      </View>
      <View style={S.dataContainer}></View>
  </View>
  )
}

export default MainTab;