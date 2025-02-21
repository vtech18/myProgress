import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HEIGHT, ROOT_SCREEN_NAMES, WIDTH} from '../constants';
import {CommonNavProps} from '../types';
import {textStyles} from '../styles';

const categories = [
  {
    title: 'Categories',
    screen: ROOT_SCREEN_NAMES.categories,
    colors: ['#f83361', '#fb6e91'],
  },
  {
    title: 'Add Timer',
    screen: ROOT_SCREEN_NAMES.addTimer,
    colors: ['#5054e9', '#7578ed'],
  },
  //   {
  //     title: 'My Progress',
  //     screen: ROOT_SCREEN_NAMES.,
  //     colors: ['#2e8b57', '#40e0d0'],
  //   },
  {
    title: 'History',
    screen: ROOT_SCREEN_NAMES.history,
    colors: ['#0054b4', '#40e0d0'],
  },
];

export default function Landing({navigation}: CommonNavProps) {
  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={{...textStyles.h5, marginVertical: '3%', fontWeight: '700'}}>
        Welcome User,
      </Text>
      <Text
        style={{
          ...textStyles.h1,
          marginVertical: '3%',
          alignSelf: 'center',
          fontSize: 35,
        }}>
        Track Progress
      </Text>
      {categories.map((item, index) => (
        <Pressable
          onPress={() => handleNavigation(item.screen)}
          style={styles.gradientView}>
          <LinearGradient
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 12,
              padding: 6,
              justifyContent: 'center',
            }}
            colors={item.colors}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.header}>{item.title}</Text>
            <Image />
          </LinearGradient>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  gradientView: {
    width: '95%',
    marginHorizontal: '2.5%',
    height: HEIGHT * 0.14,
    marginBottom: '4.5%',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
