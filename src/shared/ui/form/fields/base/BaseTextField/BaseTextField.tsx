import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { LabeledField, TextField } from '../../../../controls';

import { CommonTextFieldProps } from '../../types';

export interface BaseTextFieldProps extends CommonTextFieldProps {}

export const BaseTextField: React.FC<BaseTextFieldProps> = ({
  name,
  onChange,
  defaultValue,
  rules = {},
  label,
  required,
  ...props
}) => {
  const { control } = useFormContext();

  const computedRequired = useMemo(() => {
    if (!required) {
      return false;
    }

    if (typeof required === 'string') {
      return required;
    }

    return 'Field is required';
  }, [required]);

  return (
    <LabeledField label={label} required={!!computedRequired}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ''}
        render={({ field, fieldState }) => {
          return (
            <TextField
              {...props}
              {...field}
              data-test-id={'field-' + name}
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ' '}
              onChange={(value) => {
                // eslint-disable-next-line react/prop-types
                field.onChange(value);
                onChange && onChange(value);
              }}
            />
          );
        }}
        rules={{
          required: computedRequired,
          ...rules,
        }}
      />
    </LabeledField>
  );
};
