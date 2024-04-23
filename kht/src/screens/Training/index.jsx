import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';

import constants from "../../styles/constants";
import { color } from "../../styles/theme";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import MainHeader from "../../components/header/MainHeader";

const Training = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  if (!isFocused) {
    return null;
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View style={Styles.container}>
      <MainHeader></MainHeader>
      <Camera
        style={Styles.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={Styles.mainContainer}>
          <View style={Styles.cameraContainer}></View>
          {scanned && <Text style={Styles.text}>QR 코드 스캔 완료!</Text>}
          <Text style={Styles.traningTypeText}>KHT 기기 화면에 표시된{"\n"}QR을 스캔해주세요</Text>
        </View>
      </Camera>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
    width: constants.width,
    height: constants.height,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: "Roboto_400Regular",
    textAlign: 'center',
  },
  camera: {
    flex: 1,
  },
  cameraContainer: {
    width: constants.width/10*7.8,
    height: constants.height/3.2,
    borderColor: color.Blue[8],
    borderRadius: 30,
    borderWidth: 5
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
    paddingTop: constants.height/30,
    paddingBottom: constants.height/30
  },
  traningTypeText: {
    fontSize: 22,
    textAlign: 'center',
    color: color.White,
    fontFamily: "Roboto_400Regular",
    marginBottom: constants.height/80
  },
  noCheckText: {
    fontSize: 20,
    color: color.Black,
    fontFamily: "Roboto_400Regular"
  }
})

export default Training;