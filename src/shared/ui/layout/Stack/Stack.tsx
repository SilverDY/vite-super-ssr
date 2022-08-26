import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';
import { FC } from 'react';

export interface StackProps extends MuiStackProps {}

export const Stack: FC<StackProps> = (props) => {
  return <MuiStack {...props} />;
};
