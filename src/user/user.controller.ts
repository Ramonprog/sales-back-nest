import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { CreateUserDto } from './dto/createUser.dto'
import { UserService } from './user.service'
import { UserEntity } from './entities/user.entity'
import { ReturnUserDto } from './dto/returnUser.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createUsers: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUsers)
  }

  //o map faz com que o retorno do getAllUsers seja um array de ReturnUserDto
  @Get()
  async getAllUsers(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUsers()).map(
      (user) => new ReturnUserDto(user),
    )
  }

  @Get('/:userId')
  async findUserById(@Param('userId') userId: number) {
    return this.userService.findtUserById(userId)
  }
}
