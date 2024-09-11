import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import Favorited from '../pages/Favorited'
import { NavigationContainer } from '@react-navigation/native';


export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Favorited" component={Favorited} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}