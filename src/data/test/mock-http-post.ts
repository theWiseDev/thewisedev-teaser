import faker from 'faker';
import { HttpPostParams } from "../protocols/http";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
})
