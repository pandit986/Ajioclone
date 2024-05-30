// AppNavigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import VerticalScrollView from '../screens/scrollViewLearn/VerticalScrollView';
import HorizontalScrollView from '../screens/scrollViewLearn/HorizontalScrollView';
import MixedContentScrollView from '../screens/scrollViewLearn/MixedContentScrollView';
import ScrollViewWithRefresh from '../screens/scrollViewLearn/ScrollViewWithRefresh';
import NestedScrollView from '../screens/scrollViewLearn/NestedScrollView';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="VerticalScrollView" component={VerticalScrollView} options={{ headerShown: false }} />
                <Stack.Screen name="HorizontalScrollView" component={HorizontalScrollView} options={{ headerShown: false }} />
                <Stack.Screen name="MixedContentScrollView" component={MixedContentScrollView} options={{ headerShown: false }} />
                <Stack.Screen name="ScrollViewWithRefresh" component={ScrollViewWithRefresh} options={{ headerShown: false }} />
                <Stack.Screen name="NestedScrollView" component={NestedScrollView} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
