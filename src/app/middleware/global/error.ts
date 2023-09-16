import { Response, type TResponse } from '@kever/response'
import { Middleware, MType, type Context, type Next, type BaseMiddleware } from 'kever'

@Middleware('Error', MType.Global)
export class Error implements BaseMiddleware<MType.Global> {
  @Response()
  private response: TResponse

  async ready(ctx: Context, next: Next) {
    try {
      await next()
    } catch(err) {
      ctx.status = 500
      ctx.json(this.response(ctx, 1001, err.message))
    }
  }
}
