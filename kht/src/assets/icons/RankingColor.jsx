import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RankingColor = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#2463AC"
      stroke="#2463AC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 8 5.333 8L28 10.667 25.333 24H6.667L4 10.667 10.667 16 16 8Z"
    />
  </Svg>
)

export default RankingColor;