import { useState } from 'react';
import { Box, Button } from '@mui/material';

import { withProviders } from './providers';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Box>
      <Box>
        <Box
          sx={{
            width: '100vw',
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img width="400" src="https://vitejs.dev/logo.svg" alt="Vite logo" />
          </a>

          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img
              width="400"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="React logo"
            />
          </a>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" onClick={() => setCounter(counter + 1)}>
            You want to click this button
          </Button>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Box component="span">Clicked {counter} times</Box>
        </Box>
      </Box>
    </Box>
  );
};

const ProvidedApp = withProviders(App);

export { ProvidedApp as App };
