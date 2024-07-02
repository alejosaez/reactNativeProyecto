import React, {useState} from 'react';
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
import {useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  ConfirmEmail:undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

const SingUpScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const navigation = useNavigation<NavigationProps>();


  const onRegisterPressed = (event: GestureResponderEvent) => {
    navigation.navigate('ConfirmEmail')
  };

  const onSingInPress = (event: GestureResponderEvent) => {
    navigation.navigate('SignIn')
  };

  const onPrivacypressed = (event: GestureResponderEvent) => {
    console.warn('Privacy Policy');
  };

  const onTermsOfUsepressed = (event: GestureResponderEvent) => {
    console.warn('Term of Use');
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
        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sing in"
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

export default SingUpScreen;
