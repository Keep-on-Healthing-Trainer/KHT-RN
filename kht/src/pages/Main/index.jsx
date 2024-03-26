import React, { useState } from "react";
import MainTab from './Main'
import EditTab from "./Edit";

const Main = ({navigation}) => {
  const [editState, setEditState] = useState(false);

  return (
    <>
        {editState ? (
            <EditTab onPress={() => setEditState(false)}></EditTab>
        ) : (
            <MainTab onPress={() => setEditState(true)}></MainTab>
        )}
    </>
  )
}

export default Main;