import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';

import { styled } from '~shared/lib/styles';

export const NavLink = styled(Link)<RouterLinkProps>(() => ({
  textDecoration: 'none',
  color: 'inherit',
}));
