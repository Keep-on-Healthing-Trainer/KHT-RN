import React, { useState } from "react";
import { View, Text } from "react-native";

import {Styles as S} from './styled';
import BackPage from "../../../components/header/BackHeader";
import InputCheck from "../../../components/Inputs/InputCheck";
import Button from "../../../components/Buttons/BorderBlueButton";

const EditNamTab = ({route, navigation}) => {
  const {name} = route.params;
  const [data, setData] = useState('');

  const getValue=(onGetInText)=>{
    console.log('이름 : ' + onGetInText);
    setData(onGetInText);
   }

  return (
    <View style={S.container}>
        <BackPage innerText={name} onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></BackPage>
        <View style={S.titleContainer}>
          <Text style={S.nameTitle}>{name}</Text>
          <InputCheck
          innerText="이나경" 
          onGetInText={getValue}
          ></InputCheck>
        </View>
        <Button innerText="저장하기" onPress={() => navigation.navigate("SelectTab", { screen: 'SelectTab' })}></Button>
    </View>
  )
}

export default EditNamTab;