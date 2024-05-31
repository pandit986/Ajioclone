// AppNavigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import RegisterScreen from '../screens/LoginScreen/RegisterScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
