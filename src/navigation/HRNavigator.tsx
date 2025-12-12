/**
 * HR Navigator - handles HR-specific screens
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { HRStackParamList } from '../types/navigation';

// TODO: Import screens when created
// import {
//   HRHomeScreen,
//   MealManagementScreen,
//   PreferenceOverviewScreen,
//   UserManagementScreen,
//   ReportsScreen,
// } from '../screens/hr';

const Stack = createNativeStackNavigator<HRStackParamList>();

export const HRNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
      }}
      initialRouteName="HRHome"
    >
      {/* TODO: Add screens when created */}
      {/* <Stack.Screen
        name="HRHome"
        component={HRHomeScreen}
        options={{ title: 'HR Dashboard' }}
      />
      <Stack.Screen
        name="MealManagement"
        component={MealManagementScreen}
        options={{ title: 'Meal Management' }}
      />
      <Stack.Screen
        name="PreferenceOverview"
        component={PreferenceOverviewScreen}
        options={{ title: 'Preferences Overview' }}
      />
      <Stack.Screen
        name="UserManagement"
        component={UserManagementScreen}
        options={{ title: 'User Management' }}
      />
      <Stack.Screen
        name="Reports"
        component={ReportsScreen}
        options={{ title: 'Reports' }}
      /> */}
    </Stack.Navigator>
  );
};

