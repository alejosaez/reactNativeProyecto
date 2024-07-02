import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingInScreen from "../screens/SingInScreen/SingInScreen";
import SingUpScreen from "../screens/SingUpScreen/SingUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen/ConfirmEmailScreen"
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen"
import NewPasswordScreen from "../screens/NewPasswordScreen/NewPasswordScreen"
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SingInScreen}/>
        <Stack.Screen name="SignUp" component={SingUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;