import { Injectable, Inject } from 'kever'
import { UserRepository } from './repository'

@Injectable('UserService')
export class UserService {

  @Inject('UserRepository')
  private userRespository: UserRepository

  async getUser(name: string) {
    const user = await this.userRespository.getUser(name)
    return user
  }

  async create(name: string, age: number) {
    const user = await this.userRespository.create(name, age)
    return user
  }
  
}
