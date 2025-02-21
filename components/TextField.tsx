import {Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {textStyles} from '../styles';
import {CustomInputProps} from '../types';

export default function TextField({
  disabled = false,
  iconName,
  label,
  placeholder,
  value,
  onChange,
}: CustomInputProps) {
  let dark = false;
  return (
    <View style={[styles.inputContainer, {alignSelf: 'center'}]}>
      <View
        style={{
          minWidth: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: 8,
          marginBottom: '3%',

          alignItems: 'center',
        }}>
        <Text style={{...textStyles.body}}>{label}</Text>
      </View>
      <TextInput
        autoCapitalize={
          label?.toLowerCase().includes('capitalize') ? 'characters' : 'none'
        }
        editable={!disabled}
        style={[
          styles.textInputStyle,
          {
            color: dark ? '#fff' : '#222',
            backgroundColor: disabled ? '#ccc' : 'transparent',
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={dark ? '#808080' : '#C1BDBD'}
        value={value}
        onChangeText={onChange}
        keyboardType={
          placeholder.toLowerCase().includes('number') ||
          (label || '').toLowerCase().includes('number')
            ? 'number-pad'
            : 'default'
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 9,
    width: '85%',
    alignSelf: 'center',
    marginHorizontal: '7.5%',
    paddingVertical: Platform.OS == 'ios' ? 15 : 5,
    borderRadius: 8,
  },
  iconStyle: {
    marginRight: 10,
  },
  textInputStyle: {
    fontSize: 16,
    minHeight: 50,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderColor: '#ddd',
    borderWidth: 0.8,
    minWidth: '98%',
    borderRadius: 12,
  },
});
