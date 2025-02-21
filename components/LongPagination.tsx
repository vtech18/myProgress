import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {THEME_KIT} from '../../constants';
import {textStyles, WIDTH} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface LongPaginationProps {
  onPrevFunction: () => void;
  onNextFunction: () => void;
  currentPage: number;
  totalPages: number;
  BackPageOnPress: () => void;
  nextPageOnPress: () => void;
  lastPageOnPress: () => void;
}

export default function LongPagination({
  BackPageOnPress,
  currentPage,
  lastPageOnPress,
  nextPageOnPress,
  onNextFunction,
  onPrevFunction,
  totalPages,
}: LongPaginationProps) {
  return (
    <View style={styles.paginationRootView}>
      <Icon
        onPress={onPrevFunction}
        name="angle-left"
        style={{
          backgroundColor:
            currentPage > 1 ? `${THEME_KIT.secondaryText}2a` : 'transparent',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 15,
        }}
        color={THEME_KIT.secondaryText}
        size={19}
      />
      <View style={{...styles.paginationRootView, gap: WIDTH * 0.035}}>
        {currentPage > 1 && (
          <Text
            onPress={BackPageOnPress}
            style={{...textStyles.body, paddingVertical: 5}}>
            {currentPage - 1}
          </Text>
        )}
        <Text
          style={{
            ...textStyles.body,
            ...styles.activePage,
          }}>
          {currentPage}
        </Text>
        {(totalPages || 0) - currentPage >= 1 && (
          <Text
            onPress={nextPageOnPress}
            style={{...textStyles.body, paddingVertical: 5}}>
            {currentPage + 1}
          </Text>
        )}
        {totalPages - currentPage > 2 && (
          <Text style={{...textStyles.body}}>...</Text>
        )}
        {(totalPages || 0) - currentPage > 1 && (
          <Text
            onPress={lastPageOnPress}
            style={{...textStyles.body, paddingVertical: 5}}>
            {totalPages}
          </Text>
        )}
      </View>
      <Icon
        name="angle-right"
        onPress={onNextFunction}
        style={{
          backgroundColor:
            (totalPages || 0) - currentPage >= 1
              ? `${THEME_KIT.secondaryText}2a`
              : 'transparent',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 15,
        }}
        color={THEME_KIT.secondaryText}
        size={19}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  paginationRootView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: WIDTH * 0.05,
    marginVertical: 5,
  },
  activePage: {
    backgroundColor: THEME_KIT.primaryColor,
    fontWeight: '700',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontSize: textStyles.body.fontSize + 2,
    borderRadius: 12,
  },
});
