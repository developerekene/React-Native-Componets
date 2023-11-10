import React from 'react';
import AppEntry from './src/ui/AppEntry';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <AppEntry />
    </SafeAreaProvider>
  );
};

export default App;
