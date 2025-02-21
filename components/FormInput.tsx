// import {useTheme} from '@react-navigation/native';
// import React, {useState} from 'react';
// import {
//   Controller,
//   InputValidationRules,
//   RegisterOptions,
// } from 'react-hook-form';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Platform,
//   Image,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather'; // Updated icon package
// import {FormFieldProps} from '../types';
// import {textStyles} from '../styles';

// /**
//  * @description this is a form field integrated with react-hook-form.The icon name represents Feather Icon Name and is suitable for text,number,password and email type Inputs
//  *
//  *
//  */
// const FormField: React.FC<FormFieldProps> = ({
//   name,
//   placeholder,
//   control,
//   rules,
//   label,
//   iconName,
//   multiline = false,
//   disabled = false,
// }) => {
//   // const {dark} = useTheme();
//   let dark = false;
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const isPasswordField = placeholder.toLowerCase().includes('password');
//   return (
//     <Controller
//       key={name}
//       control={control}
//       name={name}
//       rules={rules}
//       defaultValue=""
//       render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
//         <>
//           {/* <Text style={{...textStyles.body}}> {label}</Text> */}
//           <View style={[formInputStyles.inputContainer, {alignSelf: 'center'}]}>
//             <View style={formInputStyles.iconLabelContainer}>
//               <Image style={{width: 20, height: 20}} source={iconName} />
//               <Text style={{...textStyles.body}}>{label}</Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 borderColor: '#ddd',
//                 borderWidth: 0.8,
//                 borderRadius: 12,
//               }}>
//               <TextInput
//                 autoCapitalize={
//                   label?.toLowerCase().includes('capitalize')
//                     ? 'characters'
//                     : 'none'
//                 }
//                 scrollEnabled={true}
//                 editable={!disabled}
//                 multiline={multiline}
//                 style={[
//                   formInputStyles.textInputStyle,
//                   {
//                     color: dark ? '#fff' : '#222',
//                     paddingVertical: Platform.OS == 'ios' ? 13 : 16,
//                     verticalAlign: 'top',
//                   },
//                 ]}
//                 placeholder={placeholder}
//                 placeholderTextColor={dark ? '#808080' : '#666'}
//                 value={value}
//                 onChangeText={onChange}
//                 onBlur={onBlur}
//                 secureTextEntry={isPasswordField && !isPasswordVisible}
//                 keyboardType={
//                   placeholder.toLowerCase().includes('number') ||
//                   (label || '').toLowerCase().includes('number')
//                     ? 'number-pad'
//                     : 'default'
//                 }
//               />
//               {isPasswordField ? (
//                 <TouchableOpacity
//                   onPress={() => setIsPasswordVisible(!isPasswordVisible)}
//                   style={formInputStyles.eyeIcon}>
//                   <Feather
//                     name={isPasswordVisible ? 'eye' : 'eye-off'}
//                     size={20}
//                     style={{width: 30, paddingVertical: 15}}
//                     color={dark ? '#808080' : '#808080'}
//                   />
//                 </TouchableOpacity>
//               ) : (
//                 <View style={{height: 1, width: 40}}></View>
//               )}
//             </View>
//           </View>
//           {error && (
//             <Text style={formInputStyles.errorText}>{error.message}</Text>
//           )}
//         </>
//       )}
//     />
//   );
// };

// export const formInputStyles = StyleSheet.create({
//   inputContainer: {
//     // flexDirection: 'row',
//     alignItems: 'flex-start',
//     paddingHorizontal: 10,
//     marginTop: 9,
//     width: '90%',
//     alignSelf: 'center',
//     marginHorizontal: '5%',
//     paddingVertical: Platform.OS == 'ios' ? 15 : 5,
//     borderRadius: 8,
//   },
//   iconStyle: {
//     marginRight: 10,
//   },
//   textInputStyle: {
//     fontSize: 16,
//     minHeight: 50,
//     paddingHorizontal: '2%',
//     paddingVertical: '2%',

//     minWidth: '90%',
//   },

//   eyeIcon: {
//     marginLeft: 10,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     textAlign: 'left',
//     alignSelf: 'flex-start',
//     marginLeft: '12%',
//     marginBottom: 9,
//   },
//   iconLabelContainer: {
//     minWidth: '100%',
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     gap: 8,
//     marginBottom: '3%',

//     alignItems: 'center',
//   },
// });

// export default FormField;
