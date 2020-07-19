import faker from 'faker'
import { SubscribeParams } from '../usecases/subscribe'

export const mockSubscribe = (): SubscribeParams => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
})
