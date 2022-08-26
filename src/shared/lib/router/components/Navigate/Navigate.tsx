import { Navigate as RouterNavigate, NavigateProps as RouterNavigateProps } from 'react-router-dom';

export interface NavigateProps extends Omit<RouterNavigateProps, 'to'> {
  to: string;
}

export const Navigate: React.FC<NavigateProps> = ({ to, ...props }) => {
  if (import.meta.env.SSR) {
    // eslint-disable-next-line no-console
    console.log('[Router]: redirecting...');

    return null;
  }

  return <RouterNavigate to={to} {...props} />;
};
