import { Injectable } from 'kever'
import { User } from './entity'

@Injectable('UserRepository')
export class UserRepository {
  /**
   * create user
   * @param name 
   * @param age 
   * @returns 
   */
  async create(name: string, age: number) {
    return User.createUser(name, age)
  }
  /**
   * get user
   * @param name 
   * @returns 
   */
  async getUser(name: string) {
    const users: User[] = [
      User.createUser('kever', 18),
      User.createUser('kever1', 20),
      User.createUser('kever2', 22)
    ]
    const user = users.find(user => user.getName() === name)
    return user
  }
}
