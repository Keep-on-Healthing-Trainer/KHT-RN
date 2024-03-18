import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/User/Login';
import Signup from './src/pages/User/Signup';
import Rank from './src/pages/Rank';
import Info from './src/pages/User/Info';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options = {{ headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options = {{ headerShown: false}} name="Signup" component={Signup} />
            <Stack.Screen options = {{ headerShown: false}} name="Rank" component={Rank} />
            <Stack.Screen options = {{ headerShown: false}} name="Info" component={Info} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;