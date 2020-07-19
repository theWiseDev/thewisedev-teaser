// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker'
import { RemoteSubscribe } from './remote-subscribe'
import { HttpPostClientSpy } from '../../test/mock-http-client'
import { mockSubscribe } from '../../../domain/test/mock-subscribe'
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'
import { HttpStatusCode } from '../../protocols/http/http-response'

type SutTypes = {
  sut: RemoteSubscribe
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
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
})
