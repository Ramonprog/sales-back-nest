import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/createUser.dto'
import { User } from './interface/user.interface'
import { hashSync } from 'bcrypt'

@Injectable()
export class UserService {
  private users: User[] = []

  async createUser(createUser: CreateUserDto): Promise<User> {
    const hashedPassword = hashSync(createUser.password, 10)
    const user = {
      ...createUser,
      id: this.users.length + 1,
      password: hashedPassword,
    }
    this.users.push(user)

    return user
  }

  async getAllUsers(): Promise<User[]> {
    return this.users
  }
}
