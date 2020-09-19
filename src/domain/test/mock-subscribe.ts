import faker from 'faker'
import { SubscribeParams } from '../usecases'
import { SubscriberModel } from '../models'

export const mockSubscribe = (): SubscribeParams => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
})

export const mockSubscriberModel = (): SubscriberModel => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
})
