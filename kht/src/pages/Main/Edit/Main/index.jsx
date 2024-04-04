import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import Profile from "../../../../assets/icons/Profile";
import BackPage from "../../../../components/header/BackHeader";

const MainEditTab = ({navigation, onProfilePress, onBackPress, onPress, onSecondPress, onThirdPress}) => {
  const [profileLink, setProfileLink] = useState(null);

  return (
    <View style={S.container}>
        <BackPage onPress={onBackPress} innerText="프로필 편집"></BackPage>
        <View style={S.profileContainer}>
            {profileLink ? (
            <></>
            ) : (
            <Profile style={S.profile}></Profile>
            )}
            <TouchableOpacity onPress={onProfilePress}>
                <Text style={S.profileText}>프로필 사진 수정</Text>
            </TouchableOpacity>
        </View>
        <View style={S.nameContainer}>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>이름</Text>
            <TouchableOpacity onPress={onPress}>
              <Text style={S.nameStyle}>이나경</Text>
            </TouchableOpacity>
          </View>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>아이디</Text>
            <TouchableOpacity onPress={onSecondPress}>
              <Text style={S.nameStyle}>moshsdkfjsak</Text>
            </TouchableOpacity>
          </View>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>전화번호</Text>
            <TouchableOpacity onPress={onThirdPress}>
              <Text style={S.nameStyle}>01055558888</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default MainEditTab;