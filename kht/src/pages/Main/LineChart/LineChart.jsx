import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Svg, { Line } from 'react-native-svg';

import useLine from './useLine'
import { color } from '../../../styles/theme';
import constants from "../../../styles/constants";

const LineChart = ({ points, data }) => {
    const [lines] = useLine(points);

    return (
      <View style={Styles.container}>
        <Svg viewBox="0 0 100 100">
          {lines.map(({ x1, x2, y1, y2 }, index) => (
            <Line x1={x1} x2={x2} y1={y1} y2={y2} key={index} stroke={color.Blue[6]} strokeWidth="1" />
          ))}
          {points.map(({ x, y }, index) => {
            <View cx={x} cy={y} r="1" key={index} style={Styles.circle}></View>
          })}
        </Svg>
      </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/4.5
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: color.Blue[8]
    }
})

export default LineChart;