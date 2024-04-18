import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

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
    let [fontsLoaded] = useFonts({
      Roboto_100Thin,
      Roboto_300Light,
      Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold,
      Roboto_900Black,
    });

    useEffect(() => {
      navigation.navigate("HomeScreen", { screen: 'HomeScreen' });
    }, []);

    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
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
                    <Text style={{color: color.Blue[4], fontFamily: "Roboto_500Medium"}}>트레이닝</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={Styles.container}
                    onPress={() => navigation.navigate("Training", { screen: 'Training' })}
                  >
                    <TrainingNoColor></TrainingNoColor>
                    <Text style={{color: color.Gray[4], fontFamily: "Roboto_500Medium"}}>트레이닝</Text>
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
                    onPress={() => navigation.reset({
                      index: 0,
                      routes: [{ name: 'HomeScreen' }],
                    })}
                  >
                    <HomeColor></HomeColor>
                    <Text style={{color: color.Blue[4], fontFamily: "Roboto_500Medium"}}>홈</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={Styles.container}
                    onPress={() => navigation.reset({
                      index: 0,
                      routes: [{ name: 'HomeScreen' }],
                    })}
                  >
                    <HomeNoColor></HomeNoColor>
                    <Text style={{color: color.Gray[4], fontFamily: "Roboto_500Medium"}}>홈</Text>
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
                    <Text style={{color: color.Blue[4], fontFamily: "Roboto_500Medium"}}>랭킹</Text>
                  </TouchableOpacity>
              ) : (
                <TouchableOpacity style={Styles.container}
                  onPress={() => navigation.navigate("Ranking", { screen: 'Ranking' })}
                >
                  <RankingNoColor></RankingNoColor>
                  <Text style={{color: color.Gray[4], fontFamily: "Roboto_500Medium"}}>랭킹</Text>
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