// AppNavigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Animations from '../screens/Animations/Animations';
import HandlingGestures from '../screens/Handling_Gestures/HandlingGestures';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Animations" component={Animations} options={{ headerShown: false }} />
                <Stack.Screen name="HandlingGestures" component={HandlingGestures} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
