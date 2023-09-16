import { Controller, type Next, type Context, Inject, Get, Post } from 'kever'
import { Response, type TResponse } from '@kever/response'
import { UserService } from './service'
import { User } from './entity'

@Controller('/user')
export class UserController {

  @Response()
  private response: TResponse

  @Inject('UserService')
  private userService: UserService

  @Post('/create')
  async create(ctx: Context, next: Next) {
    const { name, age } = ctx.getBody()! as User
    const user = await this.userService.create(name, age)

    ctx.json(this.response(ctx, 0, user))
    await next()
  }
  @Get('/getuser')
  async getUser(ctx: Context, next: Next) {
    const { name } = ctx.getQuery()! as Pick<User, 'name'>
    const user = await this.userService.getUser(name)
    ctx.json(this.response(ctx, 0, user))
    await next()
  }
}
