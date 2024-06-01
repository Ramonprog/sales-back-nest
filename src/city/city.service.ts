import { Inject, Injectable } from '@nestjs/common'
import { CityEntity } from './entities/city.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Cache } from 'cache-manager'
import { CACHE_MANAGER } from '@nestjs/cache-manager'

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async getAllCitiesByStateID(stateId: number): Promise<CityEntity[]> {
    const citiesCache: CityEntity[] = await this.cacheManager.get(
      String(stateId),
    )

    if (citiesCache) {
      return citiesCache
    }

    const cities = await this.cityRepository.find({
      where: {
        stateId,
      },
    })

    await this.cacheManager.set(String(stateId), cities)

    return cities
  }
}
