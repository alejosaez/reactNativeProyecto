import React from 'react';
import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  bgColor?: string;
  fgColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  onPress, 
  text, 
  type = 'PRIMARY', 
  bgColor, 
  fgColor 
}) => {
  const containerStyle = [
    styles.container,
    styles[`container_${type}` as keyof typeof styles],
    bgColor ? { backgroundColor: bgColor } : {},
  ];
  
  const textStyle = [
    styles.text,
    styles[`text_${type}` as keyof typeof styles],
    fgColor ? { color: fgColor } : {},
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
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_TERTIARY: {
    // Agrega los estilos necesarios para TERTIARY si es diferente
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_PRIMARY: {
    color: 'white',
  },
  text_SECONDARY: {
    color: '#3B71F3',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;