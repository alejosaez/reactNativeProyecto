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
import {useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  ConfirmEmail: undefined;
  NewPassword: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

const NewPasswordScreen: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const navigation = useNavigation<NavigationProps>();



  const onSubmitPressed = (event: GestureResponderEvent) => {
    navigation.navigate('Home')
  };

  const onSingInPress = (event: GestureResponderEvent) => {
    navigation.navigate('SignIn')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>New Password</Text>

        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <CustomInput
          placeholder="Enter new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;
