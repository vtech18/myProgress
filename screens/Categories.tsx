import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {layoutStyles} from '../styles';
import TextField from '../components/TextField';
import StyledButton from '../components/StyledButton';

export default function Categories() {
  const [inputField, setInputField] = useState('');
  const [allCategories, setAllCategories] = useState([] as any);

  const fetchAllCategories = async () => {
    try {
    } catch (error) {}
  };
  return (
    <View style={layoutStyles.container}>
      <TextField
        iconName={''}
        label="Category"
        onChange={setInputField}
        placeholder="Enter Category"
        value={inputField}
      />
      <StyledButton onPress={() => {}} title="Add Category" />
      <FlatList
        data={allCategories}
        style={{
          width: '96%',
          marginHorizontal: '2%',
          maxHeight: '75%',
          backgroundColor: '#0a0',
          marginTop: '2%',
        }}
        renderItem={() => <></>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
