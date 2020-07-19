export enum HttpStatusCode {
  noContent = 204,
  unauthorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
}
