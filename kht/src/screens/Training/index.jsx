import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera';

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
import onWeb from "../../utils/fucntion/WebSocket";
import onUser from "../../utils/fucntion/User"

const Training = ({navigation}) => {
  const [ userData, setUserData ]= useState({});
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
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
    onGetUserData();
    setScanned(true);
  }, [])

  const onGetUserData = async () => {
    try {
      const user = await onUser();
      setUserData(user);
    } catch (error) {
      console.log("유저 정보 가져오기 오류");
    }
  }

  if (!isFocused) {
    return null;
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={Styles.container}>
        <MainHeader></MainHeader>
        <Text style={{ textAlign: 'center' }}>카메라 권한을 허용해주세요</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = (data) => {
    setScanned(false);
    const sessionId = (data.data.split('?')[1]).split('=')[1];
    onWeb(sessionId, userData.id);
    Alert.alert('QR코드 스캔에 성공했습니다.');
  };

  return (
    <View style={Styles.container}>
      <MainHeader></MainHeader>
      <CameraView
      style={Styles.camera} 
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }} 
      onBarcodeScanned={scanned ? handleBarCodeScanned : undefined}
      >
        <View style={Styles.mainContainer}>
          <View style={Styles.cameraContainer}></View>
          <Text style={Styles.traningTypeText}>KHT 기기 화면에 표시된{"\n"}QR을 스캔해주세요</Text>
        </View>
      </CameraView>
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
  camera: {
    flex: 1,
  },
  cameraContainer: {
    width: 300,
    height: 300,
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