/**
 * Food order application
 * Author : Manpreet Kaur
 * Last used : 20/05/2021
 * Notes : This is full project app.js all the customisation is stored here. This app is based on food order criteria where anyone can register
 * and order food available.
 *
 * @format
 * @flow
 */

// import dependencies
import 'react-native-gesture-handler';
import React from 'react';
import {YellowBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

enableScreens();

// TODO: Remove when fixed
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended',
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);

// import MainNavigatorA or MainNavigatorB to preview design differnces
import MainNavigator from './src/navigation/MainNavigatorA';

// APP
function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
}

export default App;
