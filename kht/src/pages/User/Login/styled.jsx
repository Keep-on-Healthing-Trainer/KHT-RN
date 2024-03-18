import { StyleSheet } from "react-native";
import constants from '../../../styles/constants'
import { color } from '../../../styles/theme'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: constants.width,
    height: constants.height,
    backgroundColor: color.White,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: constants.width/5,
    height: constants.height/10
  },
  text: {
    color: color.Blue[8],
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: constants.width
  }
})