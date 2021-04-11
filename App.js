import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConexionFetch from './app/Componentes/ConexionFetch';
import Detalles from './app/Componentes/Detalles';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConexionFetch">
        <Stack.Screen name="ConexionFetch" component={ConexionFetch} />
        <Stack.Screen name="Detalles" component={Detalles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;