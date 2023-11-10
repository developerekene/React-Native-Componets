import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import OpenURLButton from './components/linking/OpenURLButton';
import {URL} from '../utils/Assets/constants';

const AppEntry: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to React Native Components</Text>
      <Text style={styles.author}>By Ekenedilichukwu Okoli</Text>

      <Text style={styles.desc}>
        Explore a collection of reusable and customizable React Native
        components in this GitHub repository. Accelerate your mobile app
        development with these efficient and well-documented UI elements.
      </Text>
      <Text style={styles.desc}>
        For a better understanding of the app structure and uses, kindly read
        the README.md file in the project root directory.
      </Text>
      <Text style={styles.descLast}>Happy Coding!</Text>

      <OpenURLButton url={URL}>Ekenedilichukwu.com</OpenURLButton>
    </SafeAreaView>
  );
};

export default AppEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 30,
    fontWeight: '800',
    color: '#05014a',
    letterSpacing: 2,
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
    fontStyle: 'italic',
    color: '#020079',
  },
  desc: {
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  descLast: {
    marginBottom: 10,
    letterSpacing: 1.5,
    color: '#0006b1',
  },
});
