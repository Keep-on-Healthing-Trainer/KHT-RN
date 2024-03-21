import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileColor = (props) => (
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
      d="M10.667 10.667a5.333 5.333 0 1 0 10.666 0 5.333 5.333 0 0 0-10.666 0ZM16 20c5.155 0 9.333 2.865 9.333 6.4V28H6.667v-1.6c0-3.535 4.178-6.4 9.333-6.4Z"
    />
  </Svg>
)
export default ProfileColor;