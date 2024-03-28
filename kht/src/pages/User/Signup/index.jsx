import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SignupTab from "./Signup";
import ProfileTab from "./Profile";

const Signup = ({navigation}) => {

    const [signupState, setSignupState] = useState(false);

  return (
    <>
    {signupState ? (
        <ProfileTab onPress={()=>{setSignupState(true)}}></ProfileTab>
    ) : (
        <SignupTab onPress={() => {setSignupState(true)}}></SignupTab>
    )}
    </>
  )
}

export default Signup;