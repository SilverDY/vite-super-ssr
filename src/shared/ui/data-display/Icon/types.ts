import React, { ReactEventHandler } from 'react';

import { SxProps } from '../../types';

import { icons } from './icons';

export type IconsType = typeof icons;
export type IconNamesType = keyof IconsType;

export interface IconProps {
  iconComponent?: React.FC;
  name?: IconNamesType;
  className?: string;
  onClick?: ReactEventHandler;
  fill?: boolean;
  sx?: SxProps;
}
