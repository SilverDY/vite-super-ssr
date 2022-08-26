import { ReactNode } from 'react';
import { UseControllerProps } from 'react-hook-form';

import { TextFieldProps } from '../../controls';

export type CommonFieldProps = Merge<
  UseControllerProps,
  {
    name: string;
    label?: ReactNode;
    required?: boolean;
  }
>;

export type CommonArrayFieldProps = Merge<
  CommonFieldProps,
  {
    fieldArrayName: string;
    fieldIndex: number;
    field?: any;
  }
>;

export type CommonTextFieldProps = Merge<
  TextFieldProps,
  CommonFieldProps & { onChange?: TextFieldProps['onChange'] }
>;
