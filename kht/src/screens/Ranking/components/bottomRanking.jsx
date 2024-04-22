import React from "react";
import { View, Text, Image } from "react-native";

import constants from "../../../styles/constants";
import { color } from "../../../styles/theme";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

const bottomRanking = (props) => {
    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={Styles.rankingContainer}>
        <View style={Styles.rankingTableContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.rankingTableProfile}></Image>
        <Text style={Styles.rankingTableText}>제갈집집</Text>
        <Text style={Styles.rankingTableText}>800회</Text>
        </View>
        <View style={Styles.rankingTableContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.rankingTableProfile}></Image>
        <Text style={Styles.rankingTableText}>제갈집집</Text>
        <Text style={Styles.rankingTableText}>800회</Text>
        </View>
        <View style={Styles.rankingTableContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.rankingTableProfile}></Image>
        <Text style={Styles.rankingTableText}>제갈집집</Text>
        <Text style={Styles.rankingTableText}>800회</Text>
        </View>
        <View style={Styles.rankingTableContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.rankingTableProfile}></Image>
        <Text style={Styles.rankingTableText}>제갈집집</Text>
        <Text style={Styles.rankingTableText}>800회</Text>
        </View>
        <View style={Styles.rankingTableContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.rankingTableProfile}></Image>
        <Text style={Styles.rankingTableText}>제갈집집</Text>
        <Text style={Styles.rankingTableText}>800회</Text>
        </View>
        <View style={Styles.rankingTableContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.rankingTableProfile}></Image>
        <Text style={Styles.rankingTableText}>제갈집집</Text>
        <Text style={Styles.rankingTableText}>800회</Text>
        </View>
        <View style={Styles.rankingTableContainer}>
        <Image source={require('../../assets/images/ProfileImage.png')} style={Styles.rankingTableProfile}></Image>
        <Text style={Styles.rankingTableText}>제갈집집</Text>
        <Text style={Styles.rankingTableText}>800회</Text>
        </View>
    </View>
  )
}

const Styles = StyleSheet.create({
        rankingContainer: {
        width: constants.width,
        height: constants.height/2.3,
        alignItems: 'center',
      },
      rankingTableContainer: {
        width: constants.width/1.1,
        height: constants.height/20,
        backgroundColor: color.White,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: constants.width/15,
        paddingRight: constants.width/15,
        marginBottom: 10
      },
      rankingTableProfile: {
        width: 40,
        height: 40,
        borderRadius: 50,
      },
      rankingTableText: {
        fontSize: 12,
        color: color.Black,
        fontFamily: "Roboto_400Regular"
      },
      myRankingContainer: {
        width: constants.width,
        height: constants.height/10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: color.White,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: color.Black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      myRankingProfile: {
        width: 40,
        height: 40,
        borderRadius: 50,
      },
      myRankingText: {
        fontSize: 15,
        color: color.Black,
        fontFamily: "Roboto_400Regular"
      }
})

export default bottomRanking;