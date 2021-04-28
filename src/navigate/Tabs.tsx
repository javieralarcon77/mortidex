import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeNavigate } from './HomeNavigate';
import { SearchNavigate } from './SearchNavigate';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor:'white',
            }}
            tabBarOptions={{
                activeTintColor:'#5856D6',
                labelStyle:{
                    marginBottom: (Platform.OS === 'android') ? 10 : 0,
                },
                style:{
                    position:'absolute',
                    backgroundColor:'rgba(255, 255, 255, 0.85)',
                    borderWidth:0,
                    elevation: 0,
                    height:  (Platform.OS === 'android') ? 60 : 80,
                }
            }}
        >
            <Tab.Screen 
                name="HomeStack" 
                options={{
                    tabBarLabel: "Listado",
                    tabBarIcon: ({ color }) => <Icon color={ color } size={ 25 } name="list-outline"/>
                }}
                component={ HomeNavigate } 
            />
            <Tab.Screen 
                name="SearchStack" 
                options={{
                    tabBarLabel: "Busqueda",
                    tabBarIcon: ({ color }) => <Icon color={ color } size={ 25 } name="search-outline"/>
                }}
                component={ SearchNavigate } 
            />
        </Tab.Navigator>
    )
}

export default Tabs
