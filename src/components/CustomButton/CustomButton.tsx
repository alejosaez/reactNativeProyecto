import React from 'react';
import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  type?: 'PRIMARY' | 'TERTIARY'; // Define los tipos permitidos para `type`
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, text, type = 'PRIMARY' }) => {
  const containerStyle = [
    styles.container,
    type === 'PRIMARY' ? styles.container_PRIMARY : styles.container__TERTIARY,
  ];
  const textStyle = [
    styles.text,
    type === 'TERTIARY' ? styles.text_TERTIARY : {}, // Asegúrate de tener un estilo para `text_TERTIARY`
  ];

  return (
    <Pressable onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container__TERTIARY: {
    // Agrega los estilos necesarios para TERTIARY si es diferente
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'gray', // Define el color para el estilo TERTIARY
  },
});

export default CustomButton;
