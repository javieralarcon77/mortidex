import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import CharacterScreen from '../screens/CharacterScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParams } from './HomeNavigate';

const Stack = createStackNavigator<RootStackParams>();

export const SearchNavigate = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'white',
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={ SearchScreen }/>
            <Stack.Screen name="CharacterScreen" component={ CharacterScreen }/>
        </Stack.Navigator>
    )
}
