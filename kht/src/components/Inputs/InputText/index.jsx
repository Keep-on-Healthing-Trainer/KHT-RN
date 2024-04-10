import React from "react";
import { TextInput, StyleSheet, Text } from "react-native";
import { color } from "../../../styles/theme"
import constants from '../../../styles/constants'

const Input = ({innerText, navigation, name}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(innerText);
  }, []);

  const onChangeText = (innerText) => {
    setText(innerText);
  }

  return (
    <TextInput
    style={Styles.Bottom}
    secureTextEntry={name}
    onChangeText={onChangeText}
    >{text}</TextInput>
  )
}

const Styles = StyleSheet.create({
    Bottom: {
        backgroundColor: color.Gray[1],
        marginBottom: "5%",
        width: constants.width/10*8,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'medium',
        color: color.Black
      }
})

export default Input;