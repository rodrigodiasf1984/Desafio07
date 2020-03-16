import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import Header from './component/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NavigationService from './services/NavigationService';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    >
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
          cardStyle: {
            backgroundColor: '#192020',
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Routes.propTypes = {
  navigation: PropTypes.shape({
    navigation: PropTypes.func.isRequired,
  }).isRequired,
};

export default Routes;
