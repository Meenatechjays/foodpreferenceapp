/**
 * Container component for consistent page layout
 */

import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../themes/useTheme';

export interface ContainerProps extends ViewProps {
  safeArea?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export const Container: React.FC<ContainerProps> = ({
  safeArea = true,
  padding = 'medium',
  style,
  children,
  ...props
}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const getPadding = () => {
    const paddingMap = {
      none: 0,
      small: theme.spacing.sm,
      medium: theme.spacing.md,
      large: theme.spacing.lg,
    };
    return paddingMap[padding];
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          paddingTop: safeArea ? insets.top : 0,
          paddingBottom: safeArea ? insets.bottom : 0,
          paddingHorizontal: getPadding(),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

