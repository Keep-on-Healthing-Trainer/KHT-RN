import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { render } from 'react-dom';
import {Styles as S} from './styled';

export default class Loading extends React.Component{
    render(){
    	return(
        	<View style={S.container}>
                <Image
            	    style={S.img}
                    source={require("../../assets/images/Logo.png")}
                    resizeMode="contain"
                >
                </Image>
                <Text style={S.text}>KH TRAINER</Text>
            </View>
        );
    }
}