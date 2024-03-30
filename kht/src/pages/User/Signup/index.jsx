import React, { useState } from "react";
import SignupTab from "./Signup";
import ProfileTab from "./Profile";

const Signup = ({navigation}) => {
  const [signupState, setSignupState] = useState(false);

  return (
    <>
      {signupState ? (
          <ProfileTab onPress={() => navigation.navigate("Login", { screen: 'Login' })}></ProfileTab>
      ) : (
          <SignupTab onPress={() => {
            navigation.navigate("Login", { screen: 'Login' });
          }}
          onSecondPress={() => {
            setSignupState(true);
          }}></SignupTab>
      )}
    </>
  )
}

export default Signup;