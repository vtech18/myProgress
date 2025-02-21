import {NavigationProp, Route} from '@react-navigation/native';

export interface CommonNavProps {
  navigation: NavigationProp<any>;
  route: Route<any, any>;
}
export interface CustomInputProps {
  disabled?: boolean;
  iconName: any;
  label: string;
  placeholder: string;
  value: any;
  onChange: (text: string) => void;
}
