import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, GestureResponderEvent } from 'react-native';
import logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const SingInScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  

  const { height } = useWindowDimensions();

  const  onSingInPressed = (event: GestureResponderEvent) => {
    console.warn("Sign in");
  };
  const onForgotPasswordPressed=(event: GestureResponderEvent)=>{
    console.warn("Forgot Password"); 
   }

  return (
    <View style={styles.root}>
      <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
      <CustomInput placeholder="Username" value={userName} setValue={setUserName} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
      <CustomButton text="Sign In" onPress={onSingInPressed}/>
      <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SingInScreen;
