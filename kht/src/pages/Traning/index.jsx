import React, { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';

import { Styles as S } from './styeld';
import MainHeader from "../../components/header/MainHeader";

const Traning = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

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
    <View style={S.container}>
      <MainHeader></MainHeader>
      <Camera
        style={S.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={S.mainContainer}>
          <View style={S.cameraContainer}></View>
          {scanned && <Text style={S.text}>QR 코드 스캔 완료!</Text>}
          <Text style={S.traningTypeText}>KHT 기기 화면에 표시된{"\n"}QR을 스캔해주세요</Text>
        </View>
      </Camera>
    </View>
  )
}

export default Traning;