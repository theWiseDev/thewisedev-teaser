import React from 'react'
import Subscribe from '@/presentation/pages/subscribe'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { RemoteSubscribe } from '@/data/usecases/subscribe/remote-subscribe'

export const makeSubscribe: React.FC = () => {
  const url = 'https://thewisedev-mailing.herokuapp.com/api/register'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteSubscribe = new RemoteSubscribe(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('userName').required().min(3).build(),
    ...ValidationBuilder.field('userEmail').required().email().build(),
  ])
  return (
    <Subscribe validation={validationComposite} subscribe={remoteSubscribe} />
  )
}
