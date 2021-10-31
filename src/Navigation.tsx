import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Main = createNativeStackNavigator();

function mainStack() {
  return <Main.Navigator screenOptions={{headerShown: false}} />;
}

export function Navigation() {
  return(
    <SafeAreaView>
      <NavigationContainer>{mainStack()}</NavigationContainer>
    </SafeAreaView>
  )
}
