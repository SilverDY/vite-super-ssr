import React from 'react';

import { Box } from '../../layout';

import { UIKitInputLabel } from './styled';
import { InputLabelProps } from './types';

export const InputLabel: React.FC<InputLabelProps> = React.forwardRef(
  ({ children, required, ...props }, ref) => {
    return (
      <UIKitInputLabel shrink={false} required={required} {...props} ref={ref}>
        <Box>{children}</Box>
      </UIKitInputLabel>
    );
  }
);

InputLabel.displayName = 'InputLabel';
