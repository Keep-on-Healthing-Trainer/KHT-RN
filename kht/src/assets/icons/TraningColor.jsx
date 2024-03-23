import * as React from "react"
import Svg, { Path } from "react-native-svg"
const TraningColor = (props) => (
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
      strokeWidth={1.7}
      d="M27.967 12.033 19.9 3.967l.567-.567c.51-.511 1.144-.76 1.9-.75.755.012 1.389.273 1.9.783l4.3 4.3c.51.511.766 1.14.766 1.884 0 .745-.255 1.373-.766 1.883l-.6.533Zm-16.434 16.5c-.51.511-1.138.767-1.882.767s-1.372-.256-1.884-.767l-4.3-4.3c-.511-.51-.767-1.138-.767-1.882s.256-1.372.767-1.884L4 19.933 12.067 28l-.534.533Zm4.834-.933a1.28 1.28 0 0 1-.934.4 1.28 1.28 0 0 1-.933-.4L4.4 17.5a1.28 1.28 0 0 1-.4-.933c0-.356.133-.667.4-.934L6.3 13.7c.267-.267.584-.4.95-.4.368 0 .684.133.95.4l2.1 2.1 5.533-5.533-2.1-2.1a1.279 1.279 0 0 1-.4-.934c0-.355.134-.666.4-.933l1.9-1.933c.267-.267.584-.4.95-.4.368 0 .684.133.95.4l10.1 10.1c.267.266.4.583.4.95s-.133.684-.4.95l-1.933 1.9a1.28 1.28 0 0 1-.933.4 1.28 1.28 0 0 1-.934-.4l-2.1-2.1L16.2 21.7l2.1 2.1c.267.267.4.583.4.95 0 .366-.133.683-.4.95l-1.933 1.9Z"
    />
  </Svg>
)
export default TraningColor;