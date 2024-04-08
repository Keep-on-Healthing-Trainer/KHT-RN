import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { color } from "../styles/theme";
import constants from '../styles/constants';

import Training from "../screens/Training";
import HomeScreen from "./HomeScreen";
import Ranking from "../screens/Ranking";

import TrainingColor from "../assets/icons/TrainingColor";
import TrainingNoColor from "../assets/icons/TrainingNoColor";
import HomeColor from "../assets/icons/HomeColor";
import HomeNoColor from "../assets/icons/HomeNoColor";
import RankingColor from "../assets/icons/RankingColor";
import RankingNoColor from '../assets/icons/RankingNoColor';

const MainScreen = () => {
    const navigation = useNavigation();
  
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        component={HomeScreen}
        screenOptions={() => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            height: constants.height/8,
          }
        })}
      >
        <Tab.Screen
            name="Training"
            component={Training}
            options={{ headerShown: false,
            tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <TouchableOpacity style={Styles.container}
                    onPress={() => navigation.navigate("Training", { screen: 'Training' })}
                  >
                    <TrainingColor></TrainingColor>
                    <Text style={{color: color.Blue[4]}}>트레이닝</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={Styles.container}
                    onPress={() => navigation.navigate("Training", { screen: 'Training' })}
                  >
                    <TrainingNoColor></TrainingNoColor>
                    <Text style={{color: color.Gray[4]}}>트레이닝</Text>
                  </TouchableOpacity>
                )}
              </>
              );
            } }}
            />
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false,
            tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <TouchableOpacity style={Styles.container}
                    onPress={() => navigation.navigate("HomeScreen", { screen: 'HomeScreen' })}
                  >
                    <HomeColor></HomeColor>
                    <Text style={{color: color.Blue[4]}}>홈</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={Styles.container}
                    onPress={() => navigation.navigate("HomeScreen", { screen: 'HomeScreen' })}
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
                  <TouchableOpacity style={Styles.container}
                    onPress={() => navigation.navigate("Ranking", { screen: 'Ranking' })}
                  >
                    <RankingColor></RankingColor>
                    <Text style={{color: color.Blue[4]}}>랭킹</Text>
                  </TouchableOpacity>
              ) : (
                <TouchableOpacity style={Styles.container}
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

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MainScreen;