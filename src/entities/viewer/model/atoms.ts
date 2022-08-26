import { atom } from '~shared/lib/atom-state';

import { mockGetViewer } from '../api';

import { Viewer } from './types';

export const viewerAtom = atom<Viewer | null>(null);

export const setViewerAtom = atom<Viewer | null, unknown, Promise<void>>(
  null,
  async (_get, set, _payload) => {
    const response = await mockGetViewer();

    const newValue = response.data;
    set(viewerAtom, newValue);
  }
);
