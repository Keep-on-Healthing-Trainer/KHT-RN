import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/pages/User/Login';
import Signup from './src/pages/User/Signup';
import Ranking from './src/pages/Ranking';
import Traning from './src/pages/Traning';
import Loading from './src/pages/Loading';
import Main from './src/pages/Main';

import constants from './src/styles/constants'; 
import { color } from './src/styles/theme';

import HomeColor from './src/assets/icons/HomeColor';
import HomeNoColor from './src/assets/icons/HomeNoColor';
import RankingColor from './src/assets/icons/RankingColor';
import RankingNoColor from './src/assets/icons/RankingNoColor';
import TraningColor from './src/assets/icons/TraningColor';
import TraningNoColor from './src/assets/icons/TraningNoColor';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthTab() {
  const navigation = useNavigation();

  return (
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={({ route, navigation }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            height: constants.height/8,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }
        })}
      >
        <Tab.Screen
            name="Traning"
            component={Traning}
            options={{ headerShown: false,
            tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <TouchableOpacity style={style.container}
                    onPress={() => navigation.navigate("Traning", { screen: 'Traning' })}
                  >
                    <TraningColor></TraningColor>
                    <Text style={{color: color.Blue[4]}}>트레이닝</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={style.container}
                    onPress={() => navigation.navigate("Traning", { screen: 'Traning' })}
                  >
                    <TraningNoColor></TraningNoColor>
                    <Text style={{color: color.Gray[4]}}>트레이닝</Text>
                  </TouchableOpacity>
                )}
              </>
              );
            } }}
            />
          <Tab.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false,
            tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <TouchableOpacity style={style.container}
                    onPress={() => navigation.navigate("Main", { screen: 'Main' })}
                  >
                    <HomeColor></HomeColor>
                    <Text style={{color: color.Blue[4]}}>홈</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={style.container}
                    onPress={() => navigation.navigate("Main", { screen: 'Main' })}
                  >
                    <HomeNoColor></HomeNoColor>
                    <Text style={{color: color.Gray[4]}}>홈</Text>
                  </TouchableOpacity>
                )}
              </>
              );
            } }}
          />
          <Tab.Screen
            name="Ranking"
            component={Ranking}
            options={{ headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <>
                {focused ? (
                  <TouchableOpacity style={style.container}
                    onPress={() => navigation.navigate("Ranking", { screen: 'Ranking' })}
                  >
                    <RankingColor></RankingColor>
                    <Text style={{color: color.Blue[4]}}>랭킹</Text>
                  </TouchableOpacity>
              ) : (
                <TouchableOpacity style={style.container}
                  onPress={() => navigation.navigate("Ranking", { screen: 'Ranking' })}
                >
                  <RankingNoColor></RankingNoColor>
                  <Text style={{color: color.Gray[4]}}>랭킹</Text>
                </TouchableOpacity>
                  )}
              </>
              );
            } }}
          />
        </Tab.Navigator>
  );
}

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
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="AuthTab" component={AuthTab} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
        
      );
    }
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})