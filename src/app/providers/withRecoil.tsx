import { RecoilRoot } from 'recoil';

export const withRecoil = (component: Component) => () => {
  return <RecoilRoot>{component()}</RecoilRoot>;
};
