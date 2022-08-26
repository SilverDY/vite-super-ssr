import { styled } from '~shared/lib/styles';
import { Box, Paper, PaperProps } from '~shared/ui';

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#eef8fe',
  color: theme.palette.text.primary,

  [theme.breakpoints.up('md')]: {
    overflow: 'hidden',
  },
}));

export const Content = styled(Paper)<PaperProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 32,
  borderRadius: '20px',
  zIndex: 1,
}));

export const BgImageContainer = styled(Box)(() => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: `100%`,
}));

interface BgImageProps {
  picture?: string;
}

export const BgImage = styled(Box)<BgImageProps>(({ theme, picture }) => ({
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${picture})`,

  [theme.breakpoints.down('md')]: {
    backgroundPosition: 'center 15%',
  },
}));
