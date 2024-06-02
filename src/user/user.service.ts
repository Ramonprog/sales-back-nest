import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/createUser.dto'
import { UserEntity } from './entities/user.entity'
import { hashSync } from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<UserEntity> {
    const hashedPassword = hashSync(createUser.password, 10)

    const user = {
      ...createUser,
      typeUser: 1,
      password: hashedPassword,
    }

    return this.userRepository.save(user)
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async findtUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['addresses'],
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    return user
  }
}
