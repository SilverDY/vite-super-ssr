import { usersHandlers, usersRoutes } from './users';

export const handlers = [...usersHandlers];
export const apiRoutes = { users: usersRoutes };
