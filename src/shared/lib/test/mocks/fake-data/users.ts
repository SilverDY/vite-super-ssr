import { faker } from '@faker-js/faker';

type ApiUserData = any;
type User = any;

export const createUsersDto = (size: number) => {
  const result: ApiUserData[] = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      birthDate: faker.date.birthdate(),
    });
  }

  return result;
};

export const createUsers = (size: number) => {
  const result: User[] = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      birthDate: faker.date.birthdate(),
      age: faker.datatype.number({ min: 22, max: 45 }),
    });
  }

  return result;
};
