import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ImageSelect(props) {
  return (
    <Svg
      width={51}
      height={51}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M46.75 25.5a2.125 2.125 0 00-4.25 0h4.25zM25.5 8.5a2.125 2.125 0 000-4.25V8.5zm15.938 34H9.561v4.25h31.876V42.5zM8.5 41.437V9.564H4.25v31.874H8.5zm34-15.937v15.938h4.25V25.5H42.5zM9.562 8.5H25.5V4.25H9.562V8.5zm0 34A1.063 1.063 0 018.5 41.437H4.25a5.313 5.313 0 005.313 5.313V42.5zm31.876 4.25a5.313 5.313 0 005.312-5.313H42.5c0 .587-.476 1.063-1.063 1.063v4.25zM8.5 9.562c0-.586.476-1.062 1.063-1.062V4.25A5.312 5.312 0 004.25 9.563H8.5z"
        fill="#4D4D4D"
      />
      <Path
        d="M6.375 37.188l11.361-10.415a2.125 2.125 0 012.82-.047L34 38.25M29.75 32.938l5.072-5.072a2.125 2.125 0 012.777-.198l7.026 5.27M31.875 12.75h12.75M38.25 6.375v12.75"
        stroke="#4D4D4D"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ImageSelect;