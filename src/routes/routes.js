import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import de páginas
import  {Cadastro}  from '../pages/Cadastro';
import { Entrar } from '../pages/Entrar';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu" headerTitleAlign='right'>
                <Stack.Screen name="Cadastro" component ={Cadastro} />
                <Stack.Screen name="Entrar" component ={Entrar} />
            </Stack.Navigator>
        </NavigationContainer>
      );
};
