import { FC } from 'react';

import { useViewer } from '~entities/viewer';
import { Avatar, Backdrop, Box, CircularProgress } from '~shared/ui';

export interface UserPageProps {}

export const UserPage: FC<UserPageProps> = () => {
  const viewer = useViewer();

  if (!viewer) {
    return (
      <Backdrop open={!viewer} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <Box
      sx={{
        flex: '1 1 0%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        textAlign: 'center',
      }}
    >
      <Box>
        <Avatar src={viewer?.avatar} sx={{ width: 200, height: 200 }} />
      </Box>
      <Box>
        {viewer?.name} ({viewer?.email})
      </Box>
    </Box>
  );
};
