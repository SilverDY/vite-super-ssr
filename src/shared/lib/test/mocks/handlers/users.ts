import { rest } from 'msw';

import { fakeData } from '../fake-data';

type ApiUserData = any;

export const users: ApiUserData[] = fakeData.users.createUsersDto(100);

export const usersRoutes = {
  getUsers: `${import.meta.env.VITE_API_URL}/users`,
};

export const usersHandlers = [
  rest.get(usersRoutes.getUsers, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: users }));
  }),
];
