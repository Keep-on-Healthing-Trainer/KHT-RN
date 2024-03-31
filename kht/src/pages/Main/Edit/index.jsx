import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {Styles as S} from './styled';
import Profile from "../../../assets/icons/Profile";
import BackPage from "../../../components/header/BackHeader";
import EditName from "./EditName";

const EditTab = ({navigation, onPress}) => {
    const [editState, setEditState] = useState(null);
    const [profileLink, setProfileLink] = useState(null);

  return (
    <View style={S.container}>
      {editState ? (
        <EditName innerText={editState === 1 ? "사용자 이름" : editState === 2 ? "사용자 아이디" : editState === 3 ? "사용자 전화번호" : ""} onPress={() => setEditState("")}></EditName>
      ) : (
      <>
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
        <View style={S.nameContainer}>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>이름</Text>
            <TouchableOpacity onPress={() => setEditState(1)}>
              <Text style={S.nameStyle}>이나경</Text>
            </TouchableOpacity>
          </View>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>아이디</Text>
            <TouchableOpacity onPress={() => setEditState(2)}>
              <Text style={S.nameStyle}>moshsdkfjsak</Text>
            </TouchableOpacity>
          </View>
          <View style={S.nameDiv}>
            <Text style={S.nameTagStyle}>전화번호</Text>
            <TouchableOpacity onPress={() => setEditState(3)}>
              <Text style={S.nameStyle}>01055558888</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
      )}
    </View>
  )
}

export default EditTab;