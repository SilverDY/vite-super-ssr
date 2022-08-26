import { Box, Button } from '~shared/ui';
import { Link } from '~shared/lib/router';

export const NotFoundPage = () => {
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
      <h3>Sorry... We didn&apos;t find the page 😢</h3>

      <Link to="/">
        <Button variant="contained">Let us help you</Button>
      </Link>
    </Box>
  );
};
