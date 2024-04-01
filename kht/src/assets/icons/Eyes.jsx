import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Eyes(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.625 11.375c3.15-7 12.6-7 15.75 0M10.5 14.875a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z"
        stroke="#A1A1AA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Eyes;
