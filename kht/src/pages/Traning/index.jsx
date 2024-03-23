import React, { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from 'expo-camera';
import { Styles as S } from './styeld';
import MainHeader from "../../components/header/MainHeader";
import ArrowBottom from "../../assets/icons/ArrowBottom";

const Traning = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={S.container}>
      <MainHeader></MainHeader>
      <View style={S.mainContainer}>
        <View style={S.textContainer}>
          <Text style={S.traningTypeText}>운동 방법?</Text>
          <ArrowBottom></ArrowBottom>
        </View>
        <View style={S.cameraContainer}>
          <Camera
            style={S.camera}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          />
        </View>
        {/* {scanned && <Text style={S.text}>QR 코드 스캔 완료!</Text>} */}
        <Text style={S.traningTypeText}>KHT 기기 화면에 표시된{"\n"}QR을 스캔해주세요</Text>
        <TouchableOpacity style={S.button}><Text style={S.buttonText}>SCAN</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Traning;