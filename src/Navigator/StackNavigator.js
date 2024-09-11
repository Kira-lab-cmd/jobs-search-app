import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home';
import JobDetails from '../pages/Detail'
import Favorited from '../pages/Favorited';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="StackHome" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="JobDetails" component={JobDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="DrawerHome" component={StackNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="Favorited" component={Favorited} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator