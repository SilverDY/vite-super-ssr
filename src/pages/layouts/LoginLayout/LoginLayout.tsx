import { FC } from 'react';

import { Box } from '~shared/ui';

import { BgImage, BgImageContainer, Container, Content } from './styled';

export interface LoginLayoutProps extends ComponentWithChildren {
  picture?: string;
}

export const LoginLayout: FC<LoginLayoutProps> = ({ children, picture }) => {
  return (
    <Container>
      {picture && (
        <BgImageContainer>
          <BgImage picture={picture} />
        </BgImageContainer>
      )}
      <Content elevation={5}>
        <Box>{children}</Box>
      </Content>
    </Container>
  );
};
