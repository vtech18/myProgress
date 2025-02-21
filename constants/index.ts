import {Dimensions} from 'react-native';

export const ROOT_SCREEN_NAMES = {
  addTimer: 'Add Timer',
  categories: 'Categories',
  history: 'History',
  Landing: 'Landing',
};
const {width, height} = Dimensions.get('screen');
export const WIDTH = width;
export const HEIGHT = height;
export const isSmallScreen = width < 360;

export const THEME_KIT = {
  textColor: '#333',
  backgroundColor: '#fff',
  primaryColor: '#008CBA',
};

export const ASYNC_KEYS = {
  allCategories: 'all Categories',
};
