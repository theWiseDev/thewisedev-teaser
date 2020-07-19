import { SubscriberModel } from '../models/subscriber-model'

type SubscribeParams = {
  name: string
  email: string
}

export interface Subscribe {
  subscribe(params: SubscribeParams): Promise<SubscriberModel>
}
