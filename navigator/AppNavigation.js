// AppNavigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer">
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
