import { InputLabel, InputLabelProps } from '@mui/material';

import { styled } from '~shared/lib/styles';

export const UIKitInputLabel = styled(InputLabel)<InputLabelProps>(({ theme }) => ({
  'display': 'flex',
  'alignItems': 'center',
  'fontFamily': theme.typography.fontFamily,
  'fontWeight': 600,
  'fontSize': 14,
  'color': '#361F4D',
  'marginBottom': 8,

  '& .MuiFormLabel-asterisk': {
    color: 'rgba(217, 43, 43, 1)',
  },
}));
