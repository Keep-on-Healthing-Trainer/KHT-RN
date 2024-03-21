import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/User/Login';
import Signup from './src/pages/User/Signup';
import Ranking from './src/pages/Ranking';
import Traning from './src/pages/Traning';
import Loading from './src/pages/Loading';
import Main from './src/pages/Main';

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
            <Stack.Screen options = {{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options = {{ headerShown: false }} name="Signup" component={Signup} />
            <Stack.Screen options = {{ headerShown: false }} name="Ranking" component={Ranking} />
            <Stack.Screen options = {{ headerShown: false }} name="Traning" component={Traning} />
            <Stack.Screen options = {{ headerShown: false }} name="Main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
        
      );
    }
  }
}