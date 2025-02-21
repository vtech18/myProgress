import {StyleSheet} from 'react-native';
import {HEIGHT, isSmallScreen, THEME_KIT} from '../constants';

export const textStyles = StyleSheet.create({
  h1: {
    fontSize: isSmallScreen ? 24 : 26, // Slightly smaller for smaller screens
    color: THEME_KIT.textColor,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    paddingVertical: 6,
    lineHeight: 32, // Ensures readability
  },
  h2: {
    fontSize: isSmallScreen ? 20 : 22,
    color: THEME_KIT.textColor,
    fontWeight: '600',
    fontFamily: 'Poppins',
    lineHeight: 30,
  },
  h3: {
    fontSize: isSmallScreen ? 18 : 20,
    color: THEME_KIT.textColor,
    fontWeight: '500',
    fontFamily: 'Poppins',
    lineHeight: 28,
  },
  h4: {
    fontSize: isSmallScreen ? 16 : 18,
    color: THEME_KIT.textColor,
    fontWeight: '500',
    fontFamily: 'Poppins',
    lineHeight: 26,
  },
  h5: {
    fontSize: isSmallScreen ? 14 : 16,
    color: THEME_KIT.textColor,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 24,
  },
  body: {
    fontSize: isSmallScreen ? 15 : 16,
    color: THEME_KIT.textColor,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingVertical: 14,
    fontFamily: 'Poppins',
    fontSize: 18,
  },
});

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuIcon: {
    width: 35,
    height: 35,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {height: -2, width: 11},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  whiteBadge: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: '3%',
    borderRadius: 8,
    marginVertical: HEIGHT * 0.05,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 3,
    paddingVertical: 5,
  },
});
