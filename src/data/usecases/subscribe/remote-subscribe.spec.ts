import { RemoteSubscribe } from './remote-subscribe'
import { HttpPostClient } from './protocols/http/http-post-client'

describe('RemoteSubscribe', () => {
  test('Should call HttpPost client with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteSubscribe(url, httpPostClientSpy)
    await sut.subscribe()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
