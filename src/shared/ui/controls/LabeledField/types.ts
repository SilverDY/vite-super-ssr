import { ReactNode } from 'react';

export interface LabeledFieldProps extends ComponentWithChild {
  label?: ReactNode;
  required?: boolean;
}
