import { createTheme } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';

export const light = createTheme({
  type: 'light',
  typography: typography,
  palette: palette,
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});
