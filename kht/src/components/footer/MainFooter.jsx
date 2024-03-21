import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Shadow } from "react-native-shadow-2";
import { color } from '../../styles/theme'
import constants from '../../styles/constants'

import TraningColor from '../../assets/icons/TraningColor'
import TraningNoColor from '../../assets/icons/TraningNoColor'
import HomeColor from '../../assets/icons/HomeColor'
import HomeNoColor from '../../assets/icons/HomeNoColor'
import RankingColor from '../../assets/icons/RankingColor'
import RankingNoColor from '../../assets/icons/RankingNoColor'

const MainFooter = ({innerText, navigation}) => {

    const [clickedType, setClickedType] = useState(innerText);

  return (
    <Shadow
        style={Styles.container}
        radius={10}
        offset={[0, 5]}
        startColor="#A1A1AA"
    >
      <View style={Styles.container}>
        {clickedType === "traning" ? (
            <TouchableOpacity style={Styles.clickedView} onPress={() => setClickedType("traning")}>
                <TraningColor></TraningColor>
                <Text style={Styles.text}>트레이닝</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={Styles.clickedView} onPress={() => setClickedType("traning")}>
                <TraningNoColor></TraningNoColor>
                <Text style={Styles.text}>트레이닝</Text>
            </TouchableOpacity>
        )}
        {clickedType === "home" ? (
            <TouchableOpacity style={Styles.clickedView} onPress={() => setClickedType("home")}>
                <HomeColor></HomeColor>
                <Text style={Styles.text}>홈</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={Styles.clickedView} onPress={() => setClickedType("home")}>
                <HomeNoColor></HomeNoColor>
                <Text style={Styles.text}>홈</Text>
            </TouchableOpacity>
        )}
        {clickedType === "rank" ? (
            <TouchableOpacity style={Styles.clickedView} onPress={() => setClickedType("rank")}>
                <RankingColor></RankingColor>
                <Text style={Styles.text}>랭킹</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={Styles.clickedView} onPress={() => setClickedType("rank")}>
                <RankingNoColor></RankingNoColor>
                <Text style={Styles.text}>랭킹</Text>
            </TouchableOpacity>
        )}
      </View>
    </Shadow>
  )
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/9,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: color.White,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    clickedView: {
        width: constants.width/9,
        height: constants.height/12,
        alignItems: 'center',
        marginTop: constants.height/50
    },
    text: {
        fontSize: 12,
        fontWeight: 'medium',
        color: color.Gray[4],
    }
})

export default MainFooter;