import { FC, useMemo } from 'react';
import { BrowserNotSupportedOutlined, HomeOutlined, Person2Outlined } from '@mui/icons-material';

import { RoutesUrls, useLocation } from '~shared/lib/router';
import { Icon } from '~shared/ui';

import { Drawer, NavItem } from './Drawer';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const location = useLocation();

  const routes: NavItem[] = useMemo(
    () => [
      { title: 'Home', path: RoutesUrls.root, Icon: <Icon iconComponent={HomeOutlined} /> },
      { title: 'User', path: RoutesUrls.user, Icon: <Icon iconComponent={Person2Outlined} /> },
      {
        title: 'Not found',
        path: RoutesUrls.notFound,
        Icon: <Icon iconComponent={BrowserNotSupportedOutlined} />,
      },
    ],
    []
  );

  return <Drawer routes={routes} currentPath={location.pathname} />;
};
