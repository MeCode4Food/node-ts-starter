declare global {
  namespace Express {
    interface Response {
      removeHeader: (header: string) => void
      status: (code: number) => Response
      send: (body: any) => void
    }
  }
}
export = Express
