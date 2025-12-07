/**
 * Employee Navigator - handles employee-specific screens
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { EmployeeStackParamList } from '../types/navigation';

// TODO: Import screens when created
// import {
//   EmployeeHomeScreen,
//   MealSelectionScreen,
//   MealPreferencesScreen,
//   ProfileScreen,
//   MealDetailsScreen,
// } from '../screens/employee';

const Stack = createNativeStackNavigator<EmployeeStackParamList>();

export const EmployeeNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
      }}
      initialRouteName="EmployeeHome"
    >
      {/* TODO: Add screens when created */}
      {/* <Stack.Screen
        name="EmployeeHome"
        component={EmployeeHomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="MealSelection"
        component={MealSelectionScreen}
        options={{ title: 'Select Meal' }}
      />
      <Stack.Screen
        name="MealPreferences"
        component={MealPreferencesScreen}
        options={{ title: 'My Preferences' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{ title: 'Meal Details' }}
      /> */}
    </Stack.Navigator>
  );
};

