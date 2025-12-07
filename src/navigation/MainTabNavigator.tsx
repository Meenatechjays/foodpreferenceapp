/**
 * Main Tab Navigator - handles bottom tab navigation for main app
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabParamList } from '../types/navigation';
import { EmployeeNavigator } from './EmployeeNavigator';
import { HRNavigator } from './HRNavigator';
// TODO: Import CommonNavigator when created
// import { CommonNavigator } from './CommonNavigator';
import { useTheme } from '../themes/useTheme';
import { useAuthStore } from '../store';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  const theme = useTheme();
  const { user } = useAuthStore();

  // Determine which tabs to show based on user role
  const isHR = user?.role === 'hr' || user?.role === 'admin';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
      }}
    >
      {isHR ? (
        <>
          <Tab.Screen
            name="HRStack"
            component={HRNavigator}
            options={{
              title: 'HR',
              tabBarIcon: ({ color }) => (
                // TODO: Add icon component
                <></>
              ),
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="EmployeeStack"
            component={EmployeeNavigator}
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => (
                // TODO: Add icon component
                <></>
              ),
            }}
          />
        </>
      )}
      {/* TODO: Add CommonStack when CommonNavigator is created */}
      {/* <Tab.Screen
        name="CommonStack"
        component={CommonNavigator}
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => (
            // TODO: Add icon component
            <></>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

