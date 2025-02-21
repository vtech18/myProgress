import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  FlexStyle,
} from 'react-native';
import React, {useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {THEME_KIT} from '../constants';
import {textStyles} from '../styles';

const {height} = Dimensions.get('window');

type Props = {
  onPress: () => void;
  title: string;
  radius?: number;
  buttonWidth?: any;
  mv?: any;
  disabled?: boolean;
  fontSz?: number;
  hzPosition?: FlexStyle['alignSelf'];
  pv?: any;
  mh?: any;
  fw?: '400' | '500' | '600' | '700';
  background?: string;
  isOutlined?: boolean;
};

export default function StyledButton({
  onPress,
  title,
  radius = 15,
  buttonWidth = '80%',
  mv = '1.5%',
  disabled = false,
  fontSz = 18,
  hzPosition = 'center',
  pv = 12,
  mh = '3%',
  fw = '600',
  isOutlined = false,
  background = THEME_KIT.primaryColor,
}: Props) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          marginHorizontal: mh,
          marginVertical: mv,
          borderRadius: radius,
          minWidth: buttonWidth,
          alignSelf: hzPosition,
        },
        isOutlined
          ? {
              borderColor: background,
              borderWidth: 0.8,
              backgroundColor: 'transparent',
            }
          : {backgroundColor: background},
      ]}>
      <Text
        style={[
          textStyles.buttonText,
          {
            fontSize: fontSz,
            paddingVertical: pv,
            fontWeight: fw,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: 2,
          },
          isOutlined && {color: background},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: '3%',
  },
});
