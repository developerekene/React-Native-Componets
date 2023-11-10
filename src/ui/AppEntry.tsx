/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ScreenWrapper from './components/ScreenWrapper';
import {Text, TextInput, View} from 'react-native';

const AppEntry: React.FunctionComponent = () => {
  const [primaryC, setPrimaryC] = React.useState<string>('#020079');
  return (
    <ScreenWrapper
      headerBody={
        <View
          style={{
            borderWidth: 0.5,
            padding: 12,
            marginBottom: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 10,
              }}>
              Vision:
            </Text>
          </View>
          <TextInput
            editable={true}
            placeholder={'Your Company Vision'}
            style={{color: primaryC}}
          />
        </View>
      }
      wrapperBg="#05014a"
      primaryColor={primaryC}
    />
  );
};

export default AppEntry;
