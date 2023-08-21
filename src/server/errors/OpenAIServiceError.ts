class OpenAIServiceError extends Error {
  statusCode: number

  constructor(message: string) {
    super(message)
    this.name = 'OpenAIServiceError'
    this.statusCode = 503
  }
}

export default OpenAIServiceError
