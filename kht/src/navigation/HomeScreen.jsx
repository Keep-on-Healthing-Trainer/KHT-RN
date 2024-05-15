import 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTab from "../screens/Home/Home";
import SelectTab from "../screens/Home/Select";
import EditTab from "../screens/Home/Edit";

const Stack = createStackNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();
  
    return (
        <Stack.Navigator initialRouteName='HomeTab'>
            <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
            <Stack.Screen name="SelectTab" component={SelectTab} options={{ headerShown: false }} />
            <Stack.Screen name="EditTab" component={EditTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HomeScreen;