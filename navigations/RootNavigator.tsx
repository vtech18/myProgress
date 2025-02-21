import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROOT_SCREEN_NAMES} from '../constants';
import Landing from '../screens/Landing';
import AddTimer from '../screens/AddTimer';
import History from '../screens/History';
import Categories from '../screens/Categories';
const Root = createNativeStackNavigator();
export default function RootNavigator() {
  return (
    <Root.Navigator initialRouteName={ROOT_SCREEN_NAMES.Landing}>
      <Root.Screen
        options={{headerShown: false}}
        name={ROOT_SCREEN_NAMES.Landing}
        component={Landing}
      />
      <Root.Screen name={ROOT_SCREEN_NAMES.addTimer} component={AddTimer} />
      <Root.Screen name={ROOT_SCREEN_NAMES.history} component={History} />
      <Root.Screen name={ROOT_SCREEN_NAMES.categories} component={Categories} />
    </Root.Navigator>
  );
}

const styles = StyleSheet.create({});
