import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type ButtonProps = {
  url?: string;
  children: string;
  onPress?: () => void;
  bgColor: string;
  textColor: string;
};

const GlobalButton: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  bgColor,
  textColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{children}</Text>
    </Pressable>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});
