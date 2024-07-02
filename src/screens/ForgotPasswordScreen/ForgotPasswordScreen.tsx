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

  const [userName, setUsername] = useState<string>('');

  const onSendPressed = (event: GestureResponderEvent) => {
    console.warn('onSendPressed');
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
        <Text style={styles.title}>Reset your Password</Text>

        <CustomInput
          placeholder="UserName"
          value={userName}
          setValue={setUsername}
        />
        
        <CustomButton text="Send" onPress={onSendPressed} />

        
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
