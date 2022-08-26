import { useAtomValue, useSetAtom } from '~shared/lib/atom-state';

import { setViewerAtom, viewerAtom } from './atoms';

export const useViewer = () => {
  return useAtomValue(viewerAtom);
};

export const useSetViewer = () => {
  return useSetAtom(setViewerAtom);
};
