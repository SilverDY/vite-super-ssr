import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';
import { FC, forwardRef } from 'react';

export interface BoxProps extends MuiBoxProps {}

export const Box: FC<BoxProps> = forwardRef((props, ref) => {
  return <MuiBox {...props} ref={ref} />;
});

Box.displayName = 'Box';
