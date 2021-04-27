import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';

const Stack = createStackNavigator();

export const Navigate = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'white',
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={ HomeScreen }/>
            <Stack.Screen name="CharacterScreen" component={ CharacterScreen }/>
        </Stack.Navigator>
    )
}
