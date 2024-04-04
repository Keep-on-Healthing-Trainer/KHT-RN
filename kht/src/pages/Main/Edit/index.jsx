import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import EditName from "./EditName";
import MainEditTab from "./Main";
import ProfileTab from "./Profile";

const EditTab = ({navigation, onPress}) => {
    const [editState, setEditState] = useState('');
    const [state, setState] = useState(1);

  return (
    <>
      {state == 1 && (
        <MainEditTab
        onBackPress={onPress}
        onPress={() => {
            setEditState(1);
            setState(2);
        }}
        onSecondPress={() => {
            setEditState(2);
            setState(2);
        }}
        onThirdPress={() => {
            setEditState(3);
            setState(2);
        }}
        onProfilePress={() => {
            setState(3);
        }}
        ></MainEditTab>
      )}
      {state == 2 && (
        <EditName
        innerText={editState === 1 ? "사용자 이름" : editState === 2 ? "사용자 아이디" : editState === 3 ? "사용자 전화번호" : ""}
        onPress={() => setState(1)}
        ></EditName>
      )}
      {state == 3 && (
        <ProfileTab
        onPress={() => {
          setState(1);
        }}
        ></ProfileTab>
      )}
    </>
  )
}

export default EditTab;