import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { CityEntity } from './entities/city.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CacheService } from 'src/cache/cache.service'

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,

    private readonly cacheManager: CacheService,
  ) {}
  async getAllCitiesByStateID(stateId: number): Promise<CityEntity[]> {
    return this.cacheManager.getChache<CityEntity[]>(
      `state_${stateId}`,
      async () =>
        await this.cityRepository.find({
          where: {
            stateId,
          },
        }),
    )
  }

  async findCityById(id: number): Promise<CityEntity> {
    const city = await this.cityRepository.findOne({
      where: {
        id,
      },
    })

    if (!city) {
      throw new NotFoundException('City not found')
    }

    return city
  }
}
