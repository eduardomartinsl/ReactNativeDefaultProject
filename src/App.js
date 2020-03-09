import React from 'react';
import {  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from "./modules/MainScreen"
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  MainScreen
}, {
  initialRouteName: 'MainScreen'
})

const App = createAppContainer (AppNavigator)

export default function(){
  return (
    <>
      <App/>
    </>
  )
}