import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Toolbar } from '@mui/material';

import { AppHeader } from '~widgets/app-header';
import { Navigation } from '~widgets/navigation';

import { Box } from '~shared/ui';

export interface BaseLayoutProps extends Partial<ComponentWithChildren> {}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flex: 1,
      }}
    >
      <AppHeader />
      <Navigation />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};
