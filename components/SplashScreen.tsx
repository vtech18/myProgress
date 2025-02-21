import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {HEIGHT, THEME_KIT, WIDTH} from '../constants';

export default function SplashScreen() {
  const animatedValue = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, 100);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Image
        style={{
          width: WIDTH * 0.7,
          height: HEIGHT * 0.5,
          objectFit: 'contain',
          opacity: animatedValue,
        }}
        source={require('../../assets/images/projectLogo.png')}></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({});
