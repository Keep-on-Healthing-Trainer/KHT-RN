import React from "react";
import { View } from "react-native";
import LineChart from "./LineChart";
import useXY from './useXY';

const Chart = () => {
  const data = [15, 25, 37, 61, 51, 70, 83, 100];
  const [arr] = useXY(data);

  return (
    <View>
      <LineChart points={arr} data={data} />
    </View>
  );
}

export default Chart;