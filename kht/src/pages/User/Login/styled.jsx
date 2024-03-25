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
  backContainer: {
    width: constants.width,
    height: constants.height/2,
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
    justifyContent: 'center',
    width: constants.width,
  },
  inputContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: constants.width,
  },
  buttonContainer: {
    width: constants.width,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: constants.height/70
  },
  textLeft: {
    color: color.Black,
    fontSize: 12,
    fontWeight: 'regular',
    marginRight: constants.width/60
  },
  textRight: {
    color: color.Blue[8],
    fontSize: 12,
    fontWeight: 'medium',
  },
  passwordContainer: {
    flexDirection: 'row',
  }
})