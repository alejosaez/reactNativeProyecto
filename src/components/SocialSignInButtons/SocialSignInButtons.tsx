import CustomButton from '../../components/CustomButton/CustomButton';
import React from 'react';
import { GestureResponderEvent } from 'react-native';

const SocialSignInButtons: React.FC = () => {
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
