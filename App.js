/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

//import Amplify from 'aws-amplify';
//import config from './aws-exports';

//Amplify.configure(config)

export default function App() {
  return (
    <View>
      <Text>Hello world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});