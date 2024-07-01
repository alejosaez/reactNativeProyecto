import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/components/navigation/AppNavigator';
import SingInScreen from "./src/screens/SingInScreen/SingInScreen";

const App: React.FC = () => {
  return (
    <SingInScreen/>
  );
};

export default App;

// <NavigationContainer>
//   <AppNavigator />
// </NavigationContainer>