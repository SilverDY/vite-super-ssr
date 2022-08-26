import { CircularProgress } from '@mui/material';

import { styled } from '~shared/lib/styles';

export const UIKitCircularProgress = styled(CircularProgress)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: 'auto',
  ['&.MuiCircularProgress-colorPrimary']: {
    color: theme.palette.primary.main,
  },
  ['&.MuiCircularProgress-colorPrimary.track']: {
    color: 'rgba(107,61,153,0.23)',
    position: 'absolute',
  },
  ['&.MuiCircularProgress-colorSecondary']: {
    color: theme.palette.background.default,
  },
  ['&.MuiCircularProgress-colorSecondary.track']: {
    color: 'rgba(255,255,255,0.23)',
    position: 'absolute',
  },
}));
