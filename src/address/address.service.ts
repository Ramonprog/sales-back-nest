import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressEntity } from './entities/address.entity'
import { Repository } from 'typeorm'
import { CreateAddressDto } from './dto/creatteAddress.dto'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
  ) {}

  async createAddress(
    address: CreateAddressDto,
    userId: number,
  ): Promise<AddressEntity> {
    await this.userService.findtUserById(userId)

    return this.addressRepository.save({
      ...address,
      userId,
    })
  }
}
