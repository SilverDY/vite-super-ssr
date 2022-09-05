import { api, createAuthenticatedRequestHandler } from '~shared/api';
import { atom } from '~shared/lib/atom-state';

import { mockGetViewer } from '../api';

import { Viewer } from './types';

export const viewerAtom = atom<Viewer | null>(null);

export const setViewerAtom = atom<Viewer | null, { token: string }, Promise<void>>(
  null,
  async (_get, set, { token }) => {
    api.interceptors.request.use(createAuthenticatedRequestHandler(token));
    const response = await mockGetViewer();

    const newValue = response.data;
    set(viewerAtom, newValue);
  }
);
