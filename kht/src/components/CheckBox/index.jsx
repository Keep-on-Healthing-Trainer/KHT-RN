import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Check from "../../assets/icons/Check";
import { color } from "../../styles/theme";
import constants from '../../styles/constants';

const CheckBox = (props) => {
  const [loginSelect, setLoginSelect] = useState(false);

  const onCheck = () => {
    setLoginSelect(!loginSelect);
    props.onGetInPress(loginSelect);
  }

  return (
    <TouchableOpacity style={Styles.Bottom} onPress={onCheck}>
        {loginSelect ? (
            <View style={Styles.checkbox}></View>
        ) : (
            <Check></Check>
        )}
        <Text style={Styles.text}>자동 로그인</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        width: constants.width/10*8,
        height: constants.height/40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: color.Gray[8]
    },
    text: {
        marginLeft: 10,
        fontSize: 14,
        color: color.Gray[8]
    }
})

export default CheckBox;