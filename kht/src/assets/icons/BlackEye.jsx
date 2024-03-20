import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BlackEye = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.125}
      d="M6.25 27.083c7.5-16.666 30-16.666 37.5 0"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.125}
      d="M25 35.417a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Z"
    />
  </Svg>
)
export default BlackEye