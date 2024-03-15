import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './vistas/HomeScreen';
import idSolo from './vistas/idSolo';
import idTitulo from './vistas/idTitulo';
import sinResolver from './vistas/sinResolver';
import resueltos from './vistas/resueltos';
import userId from './vistas/userId';
import resueltosIdUser from './vistas/resueltosIdUser';
import sinResolverIdUser from './vistas/sinResolverIdUser';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="idSolo" component={idSolo} />
        <Stack.Screen name="idTitulo" component={idTitulo} />
        <Stack.Screen name="sinResolver" component={sinResolver} />
        <Stack.Screen name="resueltos" component={resueltos} />
        <Stack.Screen name="userId" component={userId} />
        <Stack.Screen name="resueltosIdUser" component={resueltosIdUser} />
        <Stack.Screen name="sinResolverIdUser" component={sinResolverIdUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  
