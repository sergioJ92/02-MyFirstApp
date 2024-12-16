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
import { CounterScreen } from './src/presentation/screans/CounterScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CounterScreen />
    </SafeAreaView>
  );
}

export default App;
