export interface IError extends Error {
  code: number
}

export class EmptyResultError extends Error implements IError {
  code: number
  constructor () {
    super()
    this.message = 'Results not found'
    this.code = 500
  }
}
