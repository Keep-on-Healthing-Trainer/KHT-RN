import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Styles as S} from './styled';

const Rank = ({navigation}) => {

  return (
    <View style={S.container}>      
      <Text style={S.HomeText}>랭킹 화면</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("Info", { screen: 'Info' })}
          style={S.NextBottom}
        >
          <Text style={S.BottomText}>마이페이지 화면으로</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Rank;