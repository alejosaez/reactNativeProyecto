import React from 'react';
import { GestureResponderEvent } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,NavigationProp } from '@react-navigation/native';


type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  ConfirmEmail:undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;



const SocialSignInButtons: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const onSingInFacebookPressed = (event: GestureResponderEvent) => {
    console.log('Sign In With Facebook button pressed');
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result: any) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data: any) => {
            if (data) {
              const accessToken = data.accessToken.toString();
              console.log('Access Token: ', accessToken);
              fetchUserProfile(accessToken);
            }
          });
        }
      },
      function (error: any) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const fetchUserProfile = async (accessToken: string) => {
    try {
      const profile = await Profile.getCurrentProfile();
      if (profile) {
        const userProfile = {
          id: profile.userID,
          name: profile.name,
          email: profile.email, // Puedes obtener el email a través del API de Facebook si tienes los permisos necesarios
        };
        console.log('User Profile:', userProfile);
        await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
        navigation.navigate('Home'); // Navega a la pantalla principal de tu aplicación
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const onSingInGooglePressed = (event: GestureResponderEvent) => {
    console.warn('Sign In With Google');
  };

  const onSingInApplePressed = (event: GestureResponderEvent) => {
    console.warn('Sign In With Apple');
  };

  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
