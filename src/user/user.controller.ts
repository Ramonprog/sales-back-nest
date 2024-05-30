import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/createUser.dto'

@Controller('user')
export class UserController {
  @Post()
  async create(@Body() createUsers: CreateUserDto) {
    return {
      ...createUsers,
      password: undefined,
    }
  }
}