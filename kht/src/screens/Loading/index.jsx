import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import {
    useFonts,
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  } from '@expo-google-fonts/roboto';

const Loading = ({navigation}) => {
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

    return(
        <View style={Styles.container}>
            <Image
            	style={Styles.img}
                source={require("../../assets/images/Logo.png")}
                resizeMode="contain"
            />
            <Text style={Styles.text}>KH TRAINER</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: constants.width/5,
        height: constants.height/10
    },
    text: {
        color: color.Blue[8],
        fontSize: 20,
        fontFamily: "Roboto_900Black"
    }
})

export default Loading;