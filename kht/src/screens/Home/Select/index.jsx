import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import Profile from "../../../assets/icons/Profile";
import BackPage from "../../../components/header/BackHeader";

const SelectTab = ({navigation}) => {
  const [profileLink, setProfileLink] = useState(null);

  return (
    <View style={S.container}>
        <BackPage innerText="프로필 편집" onPress={() => navigation.navigate("HomeTab", { screen: 'HomeTab' })}></BackPage>
        <View style={S.profileContainer}>
            {profileLink ? (
            <></>
            ) : (
            <Profile style={S.profile}></Profile>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("ProfileTab", { screen: 'ProfileTab' })}>
                <Text style={S.profileText}>프로필 사진 수정</Text>
            </TouchableOpacity>
        </View>
        <View style={S.nameContainer}>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>이름</Text>
            <TouchableOpacity onPress={() => navigation.navigate("EditTab", { screen: 'EditTab', name: '사용자 이름' })}>
              <Text style={S.nameStyle}>이나경</Text>
            </TouchableOpacity>
          </View>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>아이디</Text>
            <TouchableOpacity onPress={() => navigation.navigate("EditTab", { screen: 'EditTab', name: '사용자 아이디' })}>
              <Text style={S.nameStyle}>moshsdkfjsak</Text>
            </TouchableOpacity>
          </View>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>전화번호</Text>
            <TouchableOpacity onPress={() => navigation.navigate("EditTab", { screen: 'EditTab', name: '사용자 전화번호' })}>
              <Text style={S.nameStyle}>01055558888</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default SelectTab;