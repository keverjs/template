export class User {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  /**
   * name getter
   * @returns 
   */
  getName(): string {
    return this.name
  }
  /**
   * name setter
   * @param name 
   */
  setName(name: string) {
    this.name = name
  }
  /**
   * age getter
   * @returns 
   */
  getAge(): number {
    return this.age
  }
  /**
   * age setter
   * @param age 
   */
  setAge(age: number) {
    this.age = age
  }

  static createUser(name: string, age: number): User {
    return new User(name, age)
  }
}
