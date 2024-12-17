/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
//import { HelloWorldScreen } from './src/presentation/screans/HelloWorldScreen';
//import { CounterScreen } from './src/presentation/screans/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screans/CounterM3Screen';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
