import { Injectable } from '@nestjs/common'
import { CityEntity } from './entities/city.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}
  async getAllCitiesByStateID(stateId: number): Promise<CityEntity[]> {
    return await this.cityRepository.find({
      where: {
        stateId,
      },
    })
  }
}
