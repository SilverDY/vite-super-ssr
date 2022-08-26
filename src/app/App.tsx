import { Router } from '~pages';
import { Box } from '~shared/ui';

import { AuthProvider, withProviders } from './providers';
import { AppProps } from './types';

const App: React.FC<AppProps> = () => {
  return (
    <AuthProvider>
      <Box
        sx={(theme: any) => ({
          position: 'relative',
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: theme.palette.background.default,
        })}
      >
        <Router />
      </Box>
    </AuthProvider>
  );
};

const ProvidedApp: React.FC<AppProps> = withProviders(App);

export { ProvidedApp as App };
