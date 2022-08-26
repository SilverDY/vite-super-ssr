import React from 'react';

import { InputLabel } from '../InputLabel';

import { LabeledFieldProps } from './types';

export const LabeledField: React.FC<LabeledFieldProps> = ({ children, label, required }) => {
  return (
    <div>
      {label && <InputLabel required={required}>{label}</InputLabel>}
      {children}
    </div>
  );
};
