import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressEntity } from './entities/address.entity'
import { Repository } from 'typeorm'
import { CreateAddressDto } from './dto/creatteAddress.dto'
import { UserService } from 'src/user/user.service'
import { CityService } from 'src/city/city.service'

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService,
  ) {}

  async createAddress(
    address: CreateAddressDto,
    userId: number,
  ): Promise<AddressEntity> {
    await this.userService.findtUserById(userId)
    await this.cityService.findCityById(address.cityId)

    return this.addressRepository.save({
      ...address,
      userId,
    })
  }
}
