import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'; // Corregir la ruta de importación

const ForgotPasswordScreen: React.FC = () => {

  const [code, setCode] = useState<string>('');

  const onConfirmPressed = (event: GestureResponderEvent) => {
    console.warn('Confirm');
  };

  const onSingInPress = (event: GestureResponderEvent) => {
    console.warn('onSingInPress');
  };

  const onResendPress = (event: GestureResponderEvent) => {
    console.warn('onResendPress');
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />       
        
        <CustomButton
          text="Back to Sing In"
          onPress={onSingInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    textAlign: 'center',
  },
  link: {
    color: '#FDB075',
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
