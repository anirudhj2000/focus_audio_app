/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  );
};

export default App;
