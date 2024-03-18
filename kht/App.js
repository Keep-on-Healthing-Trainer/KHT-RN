import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/User/Login';
import Signup from './src/pages/User/Signup';
import Rank from './src/pages/Rank';
import Info from './src/pages/User/Info';
import Loading from './src/pages/Loading'

const Stack = createNativeStackNavigator();

export default class extends React.Component{

  state={
    isLoading : true
  };

  componentDidMount= async() => {  
    setTimeout(() => {this.setState({isLoading: false})}, 3000);
  }

  render(){
    if(this.state.isLoading){

      return <Loading/>

    }else{

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
  }
}