import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const Title = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#0A3161"
      d="M3.963.36V16H.193V.36h3.77Zm9.335 0L7.239 8.286l-3.545 3.878-.687-3.459L5.273 5.27 8.646.359h4.652ZM8.84 16 4.8 8.953l2.933-2.159L13.298 16H8.84Zm15.963-9.432v2.9h-8.025v-2.9h8.025ZM18.035.36V16h-3.77V.36h3.77Zm9.303 0V16h-3.76V.36h3.76Zm9.646 0V16h-3.77V.36h3.77Zm4.706 0v2.912H28.616V.359H41.69Z"
    />
    <Path
      fill="url(#a)"
      fillOpacity={0.8}
      d="M3.963.36V16H.193V.36h3.77Zm9.335 0L7.239 8.286l-3.545 3.878-.687-3.459L5.273 5.27 8.646.359h4.652ZM8.84 16 4.8 8.953l2.933-2.159L13.298 16H8.84Zm15.963-9.432v2.9h-8.025v-2.9h8.025ZM18.035.36V16h-3.77V.36h3.77Zm9.303 0V16h-3.76V.36h3.76Zm9.646 0V16h-3.77V.36h3.77Zm4.706 0v2.912H28.616V.359H41.69Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={21}
        x2={21}
        y1={6.5}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0994F0" stopOpacity={0} />
        <Stop offset={1} stopColor="#0996F1" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Title;