import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type ButtonProps = {
  url?: string;
  children: string;
  onPress?: () => void;
  bgColor: string;
  textColor: string;
  marginHorizontal: number;
  paddingVertical: number;
};

const GlobalButton: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  bgColor,
  textColor,
  marginHorizontal,
  paddingVertical,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          marginHorizontal: marginHorizontal,
          paddingVertical: paddingVertical,
        },
      ]}>
      <Text style={[styles.text, {color: textColor}]}>{children}</Text>
    </Pressable>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {},
});
