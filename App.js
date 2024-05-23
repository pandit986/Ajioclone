// App.js or index.js
import React from 'react';
import AppNavigation from './navigator/AppNavigation';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './store/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
}

