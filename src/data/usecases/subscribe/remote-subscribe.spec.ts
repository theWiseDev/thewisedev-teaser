import { RemoteSubscribe } from './remote-subscribe'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemoteSubscribe', () => {
  test('Should call HttpPost client with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteSubscribe(url, httpPostClientSpy)
    await sut.subscribe()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
