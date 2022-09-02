import { FC } from 'react';

import { AppBar, Toolbar } from '@mui/material';

import { Box, Stack, Typography } from '~shared/ui';
import { useSignOut } from '~shared/lib/auth';
import { ViewerMenu, useViewer } from '~entities/viewer';
import { Link } from '~shared/lib/router';

export interface AppHeaderProps extends Partial<ComponentWithChild> {}

export const AppHeader: FC<AppHeaderProps> = ({ children }) => {
  const signOut = useSignOut();
  const viewer = useViewer();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Stack sx={{ flexGrow: 1 }} spacing={1} direction="row">
          <Link to="/">
            <img src="/vite.svg" alt="App logo" />
          </Link>
          <Link to="/">
            <Typography variant="h6" noWrap component="div">
              VSSSR
            </Typography>
          </Link>
        </Stack>
        <Box>{children}</Box>
        <Box>
          <ViewerMenu onSignOut={signOut} avatar={viewer?.avatar} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
