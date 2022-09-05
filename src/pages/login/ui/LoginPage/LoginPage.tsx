import { useCallback, useState } from 'react';

import { Box } from '~shared/ui';
import { Navigate, useNavigate } from '~shared/lib/router';
import { useIsAuthenticated } from '~shared/lib/auth';
import { SignInForm, SignInFormProps, SignUpForm, SignUpFormProps } from '~features/auth';

import { useSetViewer } from '~entities/viewer';

import illustration from '../../assets/background.jpg';

import { LoginLayout } from '../../../layouts';

import { Content } from './styled';

type LoginPageForm = 'signIn' | 'signUp';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();
  const isAuth = useIsAuthenticated();
  const setViewer = useSetViewer();
  const [currentForm, setCurrentForm] = useState<LoginPageForm>('signIn');

  const handleSignIn: SignInFormProps['onSignIn'] = useCallback(
    ({ token, type }) => {
      setViewer({ token: `${type} ${token}` }).then(() => {
        navigate('/', { replace: true });
      });
    },
    [navigate, setViewer]
  );

  const handleChangeForm = useCallback((payload: LoginPageForm) => {
    setCurrentForm(payload);
  }, []);

  const handleSignUp = useCallback<NonNullable<SignUpFormProps['onSignUp']>>(() => {
    setCurrentForm('signIn');
  }, []);

  if (isAuth()) {
    return <Navigate to="/" replace />;
  }

  return (
    <LoginLayout picture={illustration}>
      <Content>
        {currentForm === 'signIn' && (
          <Box className="sidebar-header">
            <img className="logo" src="/vite.svg" alt="App logo" />
            <Box component="span" sx={{ fontSize: '48px', fontWeight: 'bold' }}>
              VSSSR
            </Box>
          </Box>
        )}
        <Box className="sidebar-content">
          {currentForm === 'signIn' && (
            <SignInForm onSignIn={handleSignIn} onChangeForm={handleChangeForm} />
          )}
          {currentForm === 'signUp' && (
            <SignUpForm onSignUp={handleSignUp} onChangeForm={handleChangeForm} />
          )}
        </Box>
      </Content>
    </LoginLayout>
  );
};
