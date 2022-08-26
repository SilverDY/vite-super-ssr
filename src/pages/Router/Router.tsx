import { Route, Routes, useLocation } from 'react-router-dom';

import { RoutesUrls } from '~shared/lib/router';
import { RequireAuth } from '~shared/lib/auth';

import { BaseLayout } from '../layouts';
import { LoginPage } from '../login';
import { UserPage } from '../user';
import { NotFoundPage } from '../not-found';

export const redirectUrl = RoutesUrls.login;

const EmptyPage: React.FC<ComponentWithChild> = ({ children }) => <div>{children}</div>;

const createProtectedElement = (component: JSX.Element) => (
  <RequireAuth loginPath={RoutesUrls.login}>{component}</RequireAuth>
);

export const Router = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={RoutesUrls.login}>
      <Route path={RoutesUrls.login} element={<LoginPage />} />

      <Route path={RoutesUrls.root} element={createProtectedElement(<BaseLayout />)}>
        <Route index element={<EmptyPage>Home page</EmptyPage>} />
        <Route path={RoutesUrls.user} element={<UserPage />} />
        <Route path={RoutesUrls.notFound} element={<NotFoundPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
