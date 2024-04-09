import React from "react";
import { View } from "react-native";
import LineChart from "./LineChart";
import useXY from './useXY';

const Chart = () => {
  const data = [1534, 2523, 3457, 6615, 5341, 7650, 8753, 1230, 2023, 5045, 3023, 5000];
  const [arr] = useXY(data);

  return (
    <View>
      <LineChart points={arr} data={data} />
    </View>
  );
}

export default Chart;