// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker'
import { RemoteSubscribe } from './remote-subscribe'
import { HttpPostClientSpy } from '../../test'
import { mockSubscribe, mockSubscriberModel } from '../../../domain/test'
import {
  InvalidCredentialsError,
  UnexpectedError,
} from '../../../domain/errors'
import { HttpStatusCode } from '../../protocols/http'
import { SubscribeParams } from '../../../domain/usecases'
import { SubscriberModel } from '../../../domain/models'

type SutTypes = {
  sut: RemoteSubscribe
  httpPostClientSpy: HttpPostClientSpy<SubscribeParams, SubscriberModel>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    SubscribeParams,
    SubscriberModel
  >()
  const sut = new RemoteSubscribe(url, httpPostClientSpy)

  return { sut, httpPostClientSpy }
}

describe('RemoteSubscribe', () => {
  test('Should call HttpPost client with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.subscribe(mockSubscribe())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPost client with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const subscribeParams = mockSubscribe()
    await sut.subscribe(subscribeParams)
    expect(httpPostClientSpy.body).toEqual(subscribeParams)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    }
    const promise = sut.subscribe(mockSubscribe())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.subscribe(mockSubscribe())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.subscribe(mockSubscribe())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = sut.subscribe(mockSubscribe())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockSubscriberModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const subscriber = await sut.subscribe(mockSubscribe())
    await expect(subscriber).toEqual(httpResult)
  })
})
