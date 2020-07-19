import { SubscriberModel } from '../models/subscriber-model'

export type SubscribeParams = {
  name: string
  email: string
}

export interface Subscribe {
  subscribe(params: SubscribeParams): Promise<SubscriberModel>
}
