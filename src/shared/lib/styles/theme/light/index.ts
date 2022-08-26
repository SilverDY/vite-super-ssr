import { createTheme } from '../utils';

import { palette } from './palette';
import { typography } from './typography';

export const light = createTheme({
  type: 'light',
  typography: typography,
  palette: palette,
});
