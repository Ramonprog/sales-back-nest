import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { AddressService } from './address.service'
import { AddressEntity } from './entities/address.entity'
import { CreateAddressDto } from './dto/creatteAddress.dto'

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:userId')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Param('userId') userId: number,
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId)
  }
}
