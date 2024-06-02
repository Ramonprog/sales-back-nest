import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressEntity } from './entities/address.entity'
import { Repository } from 'typeorm'
import { CreateAddressDto } from './dto/creatteAddress.dto'

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    address: CreateAddressDto,
    userId: number,
  ): Promise<AddressEntity> {
    return this.addressRepository.save({
      ...address,
      userId,
    })
  }
}
