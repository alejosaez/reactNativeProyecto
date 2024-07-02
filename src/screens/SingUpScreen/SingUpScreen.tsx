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

const SingUpScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');

  const onRegisterPressed = (event: GestureResponderEvent) => {
    console.warn('Register');
  };

  const onSingUpPress = (event: GestureResponderEvent) => {
    console.warn('Create an Account');
  };

  const onPrivacypressed = (event: GestureResponderEvent) => {
    console.warn('Privacy Policy');
  };

  const onTermsOfUsepressed = (event: GestureResponderEvent) => {
    console.warn('Term of Use');
  };

  const onSingInFacebookPressed = (event: GestureResponderEvent) => {
    console.warn('Sign In With Facebook');
  };

  const onSingInGooglePressed = (event: GestureResponderEvent) => {
    console.warn('Sign In With Google');
  };

  const onSingInApplePressed = (event: GestureResponderEvent) => {
    console.warn('Sign In With Apple');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>

        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsepressed}>
            Term of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacypressed}>
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Sign In With Facebook"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
          onPress={onSingInFacebookPressed}
        />
        <CustomButton
          text="Sign In With Google"
          bgColor="#E7EAF4"
          fgColor="#DD4D44"
          onPress={onSingInGooglePressed}
        />
        <CustomButton
          text="Sign In With Apple"
          bgColor="#e3e3e3"
          fgColor="#363636"
          onPress={onSingInApplePressed}
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSingUpPress}
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

export default SingUpScreen;
