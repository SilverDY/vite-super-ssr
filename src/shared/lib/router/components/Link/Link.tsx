import { forwardRef } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { SxProps } from '../../../styles';

import { NavLink } from './styled';

export interface LinkProps extends RouterLinkProps {
  sx?: SxProps;
}

export const Link: React.FC<LinkProps> = forwardRef(({ ...props }, ref: any) => {
  return <NavLink {...props} ref={ref} />;
});

Link.displayName = 'Link';
