import faker from 'faker'
import { SubscribeParams } from '../usecases/subscribe'
import { SubscriberModel } from '../models/subscriber-model'

export const mockSubscribe = (): SubscribeParams => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
})

export const mockSubscriberModel = (): SubscriberModel => ({
  token: faker.random.uuid(),
})
