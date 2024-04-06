import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LineChart from "./LineChart";
import useXY from './useXY';

const Chart = () => {
  const data = [1, 4, 2, 3, 4, 5, 5,];
  const [arr] = useXY(data);

  return (
    <View>
      <LineChart points={arr} data={data} />
    </View>
  );
}

export default Chart;