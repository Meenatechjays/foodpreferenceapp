/**
 * Form Input component integrated with react-hook-form
 */

import React from 'react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';
import { Input, InputProps } from '../common/Input';

export interface FormInputProps<T extends FieldValues> extends Omit<InputProps, 'value' | 'onChangeText' | 'error'> {
  name: Path<T>;
  control: Control<T>;
}

export function FormInput<T extends FieldValues>({
  name,
  control,
  ...inputProps
}: FormInputProps<T>) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Input
      {...inputProps}
      value={value || ''}
      onChangeText={onChange}
      onBlur={onBlur}
      error={error?.message}
    />
  );
}

