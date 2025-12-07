/**
 * Typography component with theme support
 */

import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '../../themes/useTheme';
import type { Typography } from '../../themes/typography';

type TypographyVariant = keyof Typography;

export interface TextProps extends RNTextProps {
  variant?: TypographyVariant;
  color?: 'primary' | 'secondary' | 'text' | 'textSecondary' | 'textTertiary' | 'error' | 'success';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'text',
  style,
  children,
  ...props
}) => {
  const theme = useTheme();
  const typographyStyle = theme.typography[variant];
  const textColor = theme.colors[color];

  return (
    <RNText
      style={[
        typographyStyle,
        { color: textColor },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

