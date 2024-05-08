import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/Login";
import SignupTab from "../screens/Signup/Signup";
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

const UserScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignupTab" component={SignupTab} options={{ headerShown: false }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} initialRouteName={"HomeScreen"} />
        </Stack.Navigator>
    );
}

export default UserScreen;