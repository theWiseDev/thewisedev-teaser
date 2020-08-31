/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */

import axios from 'axios'
import { HttpPostParams, HttpPostClient, HttpResponse } from '../../../data/protocols/http'

export class AxiosHttpClient implements HttpPostClient<any,any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
