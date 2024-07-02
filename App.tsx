import React from 'react';
import {StyleSheet} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/components/navigation/AppNavigator';
import SingInScreen from "./src/screens/SingInScreen/SingInScreen";
import SingUpScreen from "./src/screens/SingUpScreen/SingUpScreen";

const App: React.FC = () => {
  return (
   
    <SingUpScreen/>
  );
};

const styles= StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:"#F9FBFC"
  }

})
export default App;

// <NavigationContainer>
//   <AppNavigator />
// </NavigationContainer>