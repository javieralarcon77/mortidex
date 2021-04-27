import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PeopleScreen from '../screens/PeopleScreen';

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
            <Stack.Screen name="PeopleScreen" component={ PeopleScreen }/>
        </Stack.Navigator>
    )
}
