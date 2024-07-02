import React from 'react';
import {StyleSheet} from "react-native"
import { NavigationContainer } from '@react-navigation/native';

import Navigation from "./src/navigation/AppNavigator"


const App: React.FC = () => {
  return (
       <Navigation/>
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