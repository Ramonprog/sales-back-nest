import { ReturnStateDto } from 'src/state/dto/returnState.dto'
import { CityEntity } from '../entities/city.entity'

export class ReturnCityDto {
  name: string
  states?: ReturnStateDto

  constructor(city: CityEntity) {
    this.name = city.name
    this.states = city.state ? new ReturnStateDto(city.state) : undefined
  }
}
