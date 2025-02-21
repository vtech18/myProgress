import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HEIGHT, layoutStyles, textStyles} from '../../styles';
import {THEME_KIT, USER_SCREEN_NAMES} from '../../constants';
interface navigationHeaderProps {
  ph?: any;
  showMenuButton?: boolean;
  navigationInstance: any;
  title: string;
  showBackButton?: boolean;
}

export default function NavigationHeader({
  ph = '5%',
  showMenuButton = true,
  title,
  navigationInstance,
  showBackButton = true,
}: navigationHeaderProps) {
  const handleNavigation = async () => {
    if (!showBackButton) {
      return;
    }
    navigationInstance.goBack();
  };
  const openDrawer = () => {
    // navigationInstance.toggleDrawer();
    navigationInstance.navigate(USER_SCREEN_NAMES.settings, {
      screen: 'settings_landing',
    });
  };
  return (
    <View style={[styles.container, {paddingHorizontal: ph}]}>
      <View style={[styles.container, {width: '90%', gap: 13}]}>
        {showBackButton && (
          <Pressable onPress={handleNavigation} style={layoutStyles.menuIcon}>
            <Image
              tintColor={THEME_KIT.blackText}
              style={{width: 30, height: 30, padding: '5%'}}
              source={require('../../assets/images/arrow-left.png')}
            />
          </Pressable>
        )}
        <Text
          style={{
            ...textStyles.h3,
            fontSize: 22,
            fontFamily: 'Poppins',
            fontWeight: '700',
            marginLeft: showMenuButton ? 0 : '3%',
          }}>
          {title}
        </Text>
      </View>

      {showMenuButton && (
        <Pressable
          disabled={!showMenuButton}
          onPress={openDrawer}
          style={[layoutStyles.menuIcon, !showMenuButton && {height: 0}]}>
          <Image
            tintColor={THEME_KIT.primaryColor}
            style={{
              width: showMenuButton ? 30 : 0,
              height: showMenuButton ? 30 : 0,
              padding: '5%',
            }}
            source={require('../../assets/images/menu.png')}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    height: HEIGHT * 0.07,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
