/**
 * Header component for screens
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../themes/useTheme';
import { Text } from '../common/Text';

export interface HeaderProps {
  title?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  onBackPress?: () => void;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftComponent,
  rightComponent,
  onBackPress,
  showBackButton = false,
}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: theme.colors.surface,
          borderBottomColor: theme.colors.border,
          paddingTop: insets.top,
          height: 56 + insets.top,
        },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.left}>
          {showBackButton && onBackPress && (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <Text variant="body" color="primary">
                ← Back
              </Text>
            </TouchableOpacity>
          )}
          {leftComponent}
        </View>

        {title && (
          <View style={styles.center}>
            <Text variant="h4" color="text">
              {title}
            </Text>
          </View>
        )}

        <View style={styles.right}>{rightComponent}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backButton: {
    paddingRight: 8,
  },
});

