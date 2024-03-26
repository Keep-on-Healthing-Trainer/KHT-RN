import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import Profile from "../../../assets/icons/Profile";
import BackPage from "../../../components/header/BackHeader";

const EditTab = ({navigation, onPress}) => {
    const [profileLink, setProfileLink] = useState(null);

  return (
    <View style={S.container}>
        <BackPage onPress={onPress} innerText="프로필 편집"></BackPage>
        <View style={S.profileContainer}>
            {profileLink ? (
            <></>
            ) : (
            <Profile style={S.profile}></Profile>
            )}
            <TouchableOpacity>
                <Text style={S.profileText}>프로필 사진 수정</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default EditTab;