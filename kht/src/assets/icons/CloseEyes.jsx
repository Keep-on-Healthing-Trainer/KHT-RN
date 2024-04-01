import * as React from "react"
import Svg, { Path, Mask } from "react-native-svg"

function CloseEyes(props) {
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
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={1.93938}
        y={4.00003}
        width={15.5563}
        height={15.5563}
        fill="#000"
      >
        <Path fill="#fff" d="M1.93938 4.00003H17.49568V19.55633H1.93938z" />
        <Path d="M16.965 16.905a.75.75 0 01-1.06 1.06L3.53 5.591a.75.75 0 011.061-1.06l12.374 12.374z" />
      </Mask>
      <Path
        d="M16.965 16.905a.75.75 0 01-1.06 1.06L3.53 5.591a.75.75 0 011.061-1.06l12.374 12.374z"
        fill="#A1A1AA"
      />
      <Path
        d="M17.496 17.435l-1.06 1.06 1.06-1.06zM3 5.061L4.06 4 3 5.06zM4.06 4l13.436 13.435L4.06 4zm12.905 13.965a1.75 1.75 0 01-2.474 0L3.53 7.005a1.75 1.75 0 010-2.475.75.75 0 01.206-.146l12.875 12.874.5.5a.755.755 0 01-.147.207z"
        fill="#FAFAFA"
        mask="url(#a)"
      />
    </Svg>
  )
}

export default CloseEyes;
