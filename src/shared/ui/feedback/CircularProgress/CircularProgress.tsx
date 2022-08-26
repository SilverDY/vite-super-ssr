import { FC } from 'react';

import { CircularProgressProps } from './types';
import { UIKitCircularProgress } from './styled';

export const CircularProgress: FC<CircularProgressProps> = ({
  color = 'primary',
  thickness = 3,
  ...props
}) => {
  return <UIKitCircularProgress color={color} thickness={thickness} {...props} />;
};
