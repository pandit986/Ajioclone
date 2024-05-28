// DrawerNavigator.js
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabsNavigator from './BottomTabsNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/tab_navigation/SettingsScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
