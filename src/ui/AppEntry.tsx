import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import GlobalButton from './components/Button/GlobalButton';

const AppEntry: React.FunctionComponent = () => {
  return (
    <SafeAreaView>
      <GlobalButton
        children={'Click me'}
        bgColor={'#05014a'}
        textColor={'#ffffff'}
      />
    </SafeAreaView>
  );
};

export default AppEntry;
