import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'; // deixa disponível o store(estado global para todos os compenentes do app)

import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor="#192020" />
      </>
    </Provider>
  );
}
