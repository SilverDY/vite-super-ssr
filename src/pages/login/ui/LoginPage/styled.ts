import { styled } from '~shared/lib/styles';
import { Box } from '~shared/ui';

export const Content = styled(Box)(({ theme }) => ({
  'display': 'flex',
  'flex': '1 1 0%',
  'flexDirection': 'column',
  'width': 400,

  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },

  '& .sidebar-header': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': '100%',
    'marginBottom': '24px',
    'zIndex': 1,

    '& .logo': {
      width: 150,

      [theme.breakpoints.down('md')]: {
        width: 50,
      },
    },
  },
  '& .sidebar-content': {
    position: 'relative',
    flex: '1 1 100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      paddingBottom: 24,
    },
  },
  '& .sidebar-footer': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    fontSize: '0.8rem',
  },
}));
