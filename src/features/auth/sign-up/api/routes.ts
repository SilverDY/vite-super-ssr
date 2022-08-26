export const routes = {
  signUp: () => `/auth/register`,
  activateInvite: (uuid: string) => `/invite/activate/${uuid}`,
};
