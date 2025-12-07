/**
 * Card component with theme support
 */

import React from 'react';
import { View, ViewProps, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../themes/useTheme';

export interface CardProps extends ViewProps {
  variant?: 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'medium',
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
    };

    const variantStyles: Record<CardProps['variant'], ViewStyle> = {
      elevated: {
        ...theme.shadows.medium,
      },
      outlined: {
        borderWidth: 1,
        borderColor: theme.colors.border,
      },
      flat: {
        // No additional styles
      },
    };

    const paddingStyles: Record<CardProps['padding'], ViewStyle> = {
      none: {},
      small: {
        padding: theme.spacing.sm,
      },
      medium: {
        padding: theme.spacing.md,
      },
      large: {
        padding: theme.spacing.lg,
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
      ...paddingStyles[padding],
    };
  };

  return (
    <View style={[getCardStyle(), style]} {...props}>
      {children}
    </View>
  );
};

