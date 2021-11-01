import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Albums from './screens/albums';
import Photos from './screens/photos';

const Main = createNativeStackNavigator();

export function Navigation() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Main.Navigator screenOptions={{headerShown: false}}>
          <Main.Screen name={'albums'} component={Albums} />
          <Main.Screen name={'photos'} component={Photos} />
        </Main.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
