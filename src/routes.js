import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

const Routes = () => (
  <NavigationContainer initialRouteName="Home">
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          transitionSpec: { open: config, close: config },
          headerTitle: '',
          headerLeft: null,
          headerTransparent: true,
          headerBackTitleVisible: false,
          cardStyle: {
            backgroundColor: '#191920',
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          transitionSpec: { open: config, close: config },
          headerTitle: '',
          headerLeft: null,
          headerTransparent: true,
          headerBackTitleVisible: false,
          cardStyle: {
            backgroundColor: '#191920',
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
